import React, {useEffect} from "react";

import {TitleSearch} from "../../components/Form/Title";
import {Checkbox, Radio, Box, Input, View} from "native-base";
import {pesquisa, pesquisaBase} from "../../const/PesquisaBase";
import {ScrollView, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import {ButtonCard} from "../../components/Form/ButtonCard";

import {
    Container,
    Header,
    HeaderTitle,
    HeaderSubitle,
    QuestionContainer,
    QuestionOptionsContainer,
    TextLabel,
    OptionsContainer,
    Option,
    BodyLabel,
    ButtonFooter,
    ButtonBack,
    ButtonNext,
    BoxQuestionCheck,
    Icon,
    ButtonBackHeader,
    ScrollViewDisplay,
    IconHeader,
    BoxQuestion,
    InputResponse,
} from "./styles";

export interface QuestionPros {
    id: string;
    value: string;
    selected: boolean;
}

interface Props {
    title: string;
    subtitle: string;
    question: string;
    id: string;
    options: QuestionPros[];
    dataType: number;
}


export function ResponseSearch({navigation}: any) {
    const dataKey = '@ResponseSearch:key';
    let [question_index, setQuestionIndex] = React.useState(0);
    let [questions_data, setQuestion] = React.useState([]);
    const [responseSearch, setResponseSearch] = React.useState({questions:{}});
    let [contResponses, setContResponses] = React.useState({cont: 0});
    let [text, setText] = React.useState('');
    let [selectedText, setSelectedText] = React.useState(false);
    let [selectedRadio, setSelectedRadio] = React.useState(false);
    let [selectedQuestionId, setSelectedQuestionId] = React.useState('');
    let [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [form, setForm] = React.useState([]);
    const [sectionName, setSectionName] = React.useState('');
    const [sectionIndex, setSectionIndex] = React.useState(0);
    const [sectionId, setSectionId] = React.useState('');
    const dataSearch = '@ResponseSearch:search';
    const search = pesquisaBase;
    let cont = questions_data.length;

    let sectionIds = 'df';

    useEffect(() => {
        async function handleResponseApi() {
            await AsyncStorage.getItem(dataSearch).then((responses) => {
                const response = responses ? JSON.parse(responses) : null;
                if (response) {
                    setForm(response.sections);
                    setSectionId(response.sections[0]["id"]);
                    setQuestion(response.sections[0]["fields"]);
                    setSectionName(response.sections[0]["name"]);
                    sectionIds = response.sections[0]["id"];
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        handleResponseApi();
        getCurrentPosition();
    }, []);

    async function handleResponse() {
        try {
            const responses = await AsyncStorage.getItem(dataKey);
            const curret_responses = responses ? JSON.parse(responses!) : [];

            const questionsList =  Object.values(responseSearch.questions);
            const newResponseSearch = questionsList.map((item) => {
                if(item["dataType"] === 1){
                    return item;
                }
                else{
                    const value = item["value"];
                    return {
                        ...item,
                        value:[value]
                    }
                }
            })

            const collection = {
                question_responses: newResponseSearch,
                location: responseSearch["location"],
            }
            const new_response = [...curret_responses, collection];
            await AsyncStorage.setItem(dataKey, JSON.stringify(new_response));

            navigation.push('Search')
        } catch (error) {
            Alert.alert("Erro", "Erro ao responder pesquisa");
            navigation.navigate('Search')
        }
    }

    async function handleNext() {
        if (selectedText) {
            selectCheckbox(true, text, selectedQuestionId, 1, sectionId);
            setSelectedText(false);
        }
        if (selectedRadio) {
            setText('');
            setSelectedRadio(false);
        }
        if (sectionIndex > 0 && form[sectionIndex] && (form[sectionIndex]["fields"].length - 1) > question_index) {
            setQuestion([form[sectionIndex]["fields"][question_index + 1]]);
            if (responseSearch.questions[form[sectionIndex]["fields"][question_index].id]) {
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
            cont = questions_data.length
            setQuestionIndex(question_index + 1);
        } else if (form[sectionIndex + 1]) {
            setQuestion([form[sectionIndex + 1]["fields"][0]]);
            setSectionName(form[sectionIndex + 1]["name"]);
            setSectionId(form[sectionIndex + 1]["id"]);
            if (responseSearch.questions[form[sectionIndex + 1]["fields"][0].id]) {
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
            cont = questions_data.length
            await setQuestionIndex(0);
            setSectionIndex(sectionIndex + 1);
        } else {
            setQuestion([{
                dataType: 0,
                id: "0",
                question: "Questionário finalizado!",
            }]);
        }
    }

    async function selectedTextCheckbox(value: boolean, id: string, id_section) {
        await setSelectedText(value);
        if (!value) {
            setText('')
        }
        setSelectedQuestionId(id);
        alterStatus();
    }

    async function handleBack() {
        if (sectionIndex > 0 && question_index > 0) {
            let cont_index = question_index - 1;
            setQuestion([form[sectionIndex]["fields"][cont_index]])
            if (cont_index === 0) {
                setSectionIndex(sectionIndex - 1);
                setQuestionIndex(form[sectionIndex - 1]["fields"].length - 1);
                setSectionName(form[sectionIndex - 1]["name"]);
                setSectionId(form[sectionIndex - 1]["id"]);
            } else {
                setQuestionIndex(question_index - 1);
            }
        } else {
            setSectionName(form[0]["name"]);
            setSectionId(form[0]["id"]);
            setQuestion(form[0]["fields"])
            setQuestionIndex(0);
            setSectionIndex(0);
        }
        setButtonDisabled(false);
    }

    async function alterStatus() {
        cont = cont - 1;
        if (cont === 0) {
            setButtonDisabled(false);
        }
    }

    const getCurrentPosition = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Ops!", "Permissão de acesso a localização negada.");
        }

        let {
            coords: {latitude, longitude},
        } = await Location.getCurrentPositionAsync();

        const responses = responseSearch;
        responses["location"] = {lat: latitude, lng: longitude};
        setResponseSearch(responses);
    };

    const renderQuestion = (question: Props) => {
        switch (question.dataType) {
            case 1:
                return CheckboxSearch(question, sectionId);
            case 2:
                return RadioSearch(question, sectionId);
            case 3:
                return InputTextSearch(question, sectionId);
            case 4:
                return InputTextRadioSearch(question, sectionId);
            case 0:
                return finishQuetions()
            default:
                return RadioSearch(question, sectionId);
        }
    };

    async function selectRadio(response: any, id_question: any, dataType, id_section) {
        const responses = responseSearch;
        if (!responses.questions[id_question]) {
            alterStatus();
        }
        responses.questions[id_question] = {value: response, dataType, id: id_question, section_Id: id_section};
        setResponseSearch(responses);
    };

    const selectRadioInput = (response: any, id_question: any, dataType, id_section) => {
        const responses = responseSearch;
        if (typeof response === 'string') {
            if (!responses.questions[id_question]) {
                alterStatus();
            }
            if (response === 'responseText') {
                setSelectedRadio(true);
            } else {
                setText('');
                const responses = responseSearch;
                responses.questions[id_question] = {value: response, dataType, id: id_question, section_Id: id_section};
                setResponseSearch(responses);
            }
        }
    };

    const selectCheckbox = (response: any, item_name: any, id_question: any, dataType, id_section) => {
        const responses = responseSearch;
        alterStatus();
        if (responses.questions[id_question]) {
            if (response) {
                responses.questions[id_question] = {value: [...responses.questions[id_question].value, item_name], dataType, id: id_question, section_Id: id_section};
            } else {
                responses.questions[id_question] = {
                    value: responses.questions[id_question].value.filter(item => item !== item_name),
                    dataType,
                    id: id_question, section_Id: id_section
                };
            }
        } else {
            responses.questions[id_question] = {value: [item_name], dataType, id: id_question, section_Id: id_section};
        }
        setResponseSearch(responses);

    };
    const changeTextCheckbox = (response: any, id_question: any, id_section) => {
        setText(response);
    };

    const changeText = (response: any, id_question: any, dataType, id_section) => {

        setText(response);
        const responses = responseSearch;
        responses.questions[id_question] = {value: response, dataType, id: id_question, section_Id: id_section};
        setResponseSearch(responses);
    };

    const CheckboxSearch = (question: Props, id_section: String) => {
        return (
            <OptionsContainer>
                {question.options.map(item => (
                    <Option key={item.id}>
                        <Checkbox value={item.value} size="md" my={2}
                                  onChange={(value) => selectCheckbox(value, item.value, question.id, question.dataType, id_section)}>
                            <TextLabel>{item.value}</TextLabel>
                        </Checkbox>
                    </Option>
                ))}
                <BoxQuestionCheck>
                    <Checkbox aria-label="Fechar" value={question.id} size="md" my={2}
                              onChange={(value) => selectedTextCheckbox(value, question.id, id_section)}/>
                    <Input mx="3" size="xl" value={text} isDisabled={!selectedText} variant="underlined"
                           placeholder="Resposta" w="100%"
                           onChangeText={(text) => changeTextCheckbox(text, question.id, id_section)}/>
                </BoxQuestionCheck>
            </OptionsContainer>
        );
    };

    const InputTextSearch = (question: Props, id_section: String) => {
        return (
            <OptionsContainer>
                <Box alignItems="center">
                    <InputResponse placeholder="Resposta"/>
                </Box>
            </OptionsContainer>
        );
    };

    const InputTextRadioSearch = (question: Props, id_section: String) => {
        return (
            <OptionsContainer>
                <Radio.Group name="myRadioGroup" defaultValue={responseSearch.questions[question.id]}
                             accessibilityLabel="Pick your favorite number"
                             onChange={(value) => selectRadioInput(value, question.id, question.dataType, id_section)}>
                    <BoxQuestionCheck>
                        <Radio accessibilityLabel="Pick your favorite number" value="responseText">
                        </Radio>
                        <Input mx="3" size="xl" value={text} isDisabled={!selectedRadio} variant="underlined"
                               placeholder="Resposta" w="100%"
                               onChangeText={(text) => changeText(text, question.id, question.dataType, id_section)}/>
                    </BoxQuestionCheck>
                    {question.options.map(item => (
                        <Option key={item.id}>
                            <Radio value={item.value}>
                                <TextLabel>{item.value}</TextLabel>
                            </Radio>
                        </Option>
                    ))}
                </Radio.Group>
            </OptionsContainer>
        );
    };

    const RadioSearch = (question: Props, id_section: String) => {
        return (
            <OptionsContainer key={question.title}>
                <Radio.Group name="myRadioGroup" defaultValue={responseSearch.questions[question.id]}
                             accessibilityLabel="Pick your favorite number"
                             onChange={(value) => {selectRadio(value, question.id, question.dataType, id_section)}}>
                    {question.options.map(item => (
                        <Option key={item.id}>
                            <Radio value={item.value}>
                                <TextLabel>{item.value}</TextLabel>
                            </Radio>
                        </Option>
                    ))}
                </Radio.Group>
            </OptionsContainer>
        );
    };

    const finishQuetions = () => {
        return (
            <Box alignItems="center">
                <ButtonCard title="Salvar" type="finish" onPress={() => handleResponse()}/>
            </Box>

        );
    };

    return (
        <Container>
            <Header>
                <ButtonBackHeader onPress={() => navigation.navigate('Search')}>
                    <IconHeader name="arrowleft"/>
                </ButtonBackHeader>
                <HeaderTitle>
                    Questionário
                </HeaderTitle>
                <HeaderSubitle>
                    {sectionName}
                </HeaderSubitle>
            </Header>
            <ScrollViewDisplay>
                {questions_data.map((question, index) => (
                    <QuestionContainer key={question.id}>
                        <TitleSearch id={`${index + 1}`} title={question.question}/>
                        <QuestionOptionsContainer>
                            {renderQuestion(question)}
                        </QuestionOptionsContainer>
                    </QuestionContainer>
                ))}
            </ScrollViewDisplay>
            <ButtonFooter>
                <ButtonBack onPress={handleBack}>
                    <Icon name="left"/>
                    <TextLabel>Voltar</TextLabel>
                </ButtonBack>
                <ButtonNext disabled={buttonDisabled} onPress={handleNext}>
                    <TextLabel style={{opacity: buttonDisabled ? 0.5 : 1}}>Próximo</TextLabel>
                    <Icon style={{opacity: buttonDisabled ? 0.5 : 1}} name="right"/>
                </ButtonNext>
            </ButtonFooter>
        </Container>
    )
}