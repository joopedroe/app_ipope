import React, { useEffect } from "react";

import { TitleSearch } from "../../components/Form/Title";
import { Content, Checkbox, Radio, Box, Input, View } from "native-base";
import  { pesquisa, pesquisaBase} from "../../const/PesquisaBase";
import { ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { ButtonCard } from "../../components/Form/ButtonCard"; 

import { 
    Container,
    Header,
    HeaderTitle,
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

  export interface QuestionPros{
    id: string;
    title: string;
    selected: boolean;
  }
  interface Props {
    title: string;
    subtitle: string;
    question: string;
    id: string;
    campos: QuestionPros[];
    type: number;
  }



export function ResponseSearch({navigation}: any) {
    const dataKey = '@ResponseSearch:key';
    const questions: Props[] = pesquisa;
    let [question_index, setQuestionIndex] = React.useState(0);
    let [questions_data, setQuestion] = React.useState(questions);
    const [responseSearch, setResponseSearch] = React.useState({});
    let [contResponses, setContResponses] = React.useState({cont:0});
    let [text, setText] = React.useState('');
    let [selectedText, setSelectedText] = React.useState(false);
    let [selectedRadio, setSelectedRadio] = React.useState(false);
    let [selectedQuestionId, setSelectedQuestionId] = React.useState('');
    let [buttonDisabled, setButtonDisabled] = React.useState(true);
    const dataSearch = '@ResponseSearch:search';
    let cont = questions_data.length;

    useEffect(() => {
      async function handleResponseApi(){
          await AsyncStorage.getItem(dataSearch).then( (responses) => {
              const response = responses ? JSON.parse(responses) : null;
              if(response){
                pesquisaBase[0].question = pesquisaBase[0].question + response.mayor +'?';
              }
          }).catch( (error) => {
              console.log(error);
          } );
      }
      handleResponseApi();
  } , []);

    async function handleResponse(){
      try{
        const responses = await AsyncStorage.getItem(dataKey);
        const curret_responses = responses ? JSON.parse(responses!) : [];
        

        const new_response = [...curret_responses, responseSearch];
        await AsyncStorage.setItem(dataKey, JSON.stringify(new_response));

        navigation.push('Search')
      }
      catch(error){
        Alert.alert("Erro", "Erro ao responder pesquisa");
        navigation.navigate('Search')
      }
    }

    async function handleNext() {
      if(selectedText){
        selectCheckbox(true, text, selectedQuestionId);
        setSelectedText(false);
      }
      if(selectedRadio){
        setText('');
        setSelectedRadio(false);
      }
        if(question_index < pesquisaBase.length) {
            setQuestion([pesquisaBase[question_index]]);
            if(responseSearch[pesquisaBase[question_index].id]){
              setButtonDisabled(false);
            }
            else{
              setButtonDisabled(true);
            }
            cont = questions_data.length
            await setQuestionIndex(question_index + 1);
        }
        else{
          setQuestion([{
            type: 0,
            id: "0",
            question: "Questionário finalizado!",
          }]);
        }
      }
    
    async function selectedTextCheckbox(value: boolean, id: string) {
      await setSelectedText(value);
      if(!value){
        setText('')
      }
      setSelectedQuestionId(id);
      alterStatus();
    }
    async function handleBack() {
        if(question_index > 0) {
          setQuestionIndex(question_index-1);
          let cont_index = question_index - 1;
          if(cont_index === 0) {
            setQuestion(questions);
          }
          else{
            await setQuestion([pesquisaBase[cont_index-1]]);
          }
        }
        else{
          setQuestion(questions);
        }
        setButtonDisabled(false);
      }

      async function alterStatus() {
        cont = cont - 1;
        if(cont === 0){
          setButtonDisabled(false);
        }
      }

      const getCurrentPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status !== "granted") {
          Alert.alert("Ops!", "Permissão de acesso a localização negada.");
        }
    
        let {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
    
        const responses = responseSearch;
        responses["100"] = { lat: latitude, lng: longitude };
        setResponseSearch(responses);
      };

      const renderQuestion = (question: Props) => {
        switch (question.type) {
          case 1:
            return CheckboxSearch(question);
          case 2:
            return RadioSearch(question);
          case 3:
            return InputTextSearch(question);
          case 4:
            return InputTextRadioSearch(question);
          case 0:
            return finishQuetions()
          default:
            return RadioSearch(question);
        }
      };

      async function  selectRadio(response : any, id_question: any){
        const responses = responseSearch;
        if(!responses[id_question]){
          alterStatus();
        }
        responses[id_question] = response;
        setResponseSearch(responses);
      };

      const selectRadioInput = (response : any, id_question: any) => {
        const responses = responseSearch;
        if(typeof response === 'string'){
          if(!responses[id_question]){
            alterStatus();
          }
          if(response === 'responseText'){
            setSelectedRadio(true);
          }
          else{
            setText('');
            const responses = responseSearch;
            responses[id_question] = response;
            setResponseSearch(responses);
          }
        }
      };

      const selectCheckbox = (response : any, item_name:any, id_question: any) => {
        const responses = responseSearch;
        alterStatus();
        if (responses[id_question]) {
          if(response){
            responses[id_question] = [...responses[id_question], item_name];
          }
          else{
            responses[id_question] = responses[id_question].filter(item => item !== item_name);
          }
        }
        else{
          responses[id_question] = [item_name];
        }
       
        setResponseSearch(responses);

      };
      const changeTextCheckbox = (response : any, id_question: any) => {
        setText(response);
      };

      const changeText = (response : any, id_question: any) => {

        setText(response);
        const responses = responseSearch;
        responses[id_question] = response;
        setResponseSearch(responses);
      };

    const CheckboxSearch = (question:Props) => {
        return ( 
            <OptionsContainer>
             {question.campos.map(item => (
                <Option key={item.id} >
                    <Checkbox value={item.title} size="md" my={2} onChange={(value) =>selectCheckbox(value, item.title, question.id)}>
                      <TextLabel>{item.title}</TextLabel>
                    </Checkbox>
              </Option>
             ))}
             <BoxQuestionCheck>
                <Checkbox aria-label="Fechar" value={question.id} size="md" my={2} onChange={(value) => selectedTextCheckbox(value, question.id)}/>
                <Input mx="3" size="xl" value={text} isDisabled={!selectedText} variant="underlined" placeholder="Resposta" w="100%" onChangeText={(text) => changeTextCheckbox(text, question.id)} />
            </BoxQuestionCheck>  
            </OptionsContainer>
        );
      };

      const InputTextSearch = (question:Props) => {
        return ( 
            <OptionsContainer>
              <Box alignItems="center">
                <InputResponse placeholder="Resposta" />
              </Box>     
            </OptionsContainer>
        );
      };

      const InputTextRadioSearch = (question:Props) => {
        return ( 
            <OptionsContainer>
            <Radio.Group name="myRadioGroup" defaultValue={responseSearch[question.id]} accessibilityLabel="Pick your favorite number"  onChange={(value) =>selectRadioInput(value, question.id)}>
            <BoxQuestionCheck>
              <Radio accessibilityLabel="Pick your favorite number" value="responseText">
              </Radio>
                <Input mx="3" size="xl" value={text} isDisabled={!selectedRadio} variant="underlined" placeholder="Resposta" w="100%" onChangeText={(text) => changeText(text, question.id)} />
            </BoxQuestionCheck>
              {question.campos.map(item => (
                <Option key={item.id} >
                  <Radio  value={item.title}>
                    <TextLabel>{item.title}</TextLabel>
                  </Radio>
              </Option>
             ))}
             </Radio.Group>
            </OptionsContainer>
        );
      };

      const RadioSearch = (question:Props) => {
        return ( 
            <OptionsContainer key={question.title}>
              <Radio.Group name="myRadioGroup" defaultValue={responseSearch[question.id]} accessibilityLabel="Pick your favorite number" onChange={(value) =>selectRadio(value, question.id)}>
              {question.campos.map(item => (
                <Option key={item.id}>
                  <Radio value={item.title} >
                    <TextLabel>{item.title}</TextLabel>
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
            <ButtonCard title="Salvar" type="finish" onPress={()=> handleResponse()} />
          </Box>     

        );
      };

    return (
        <Container>
            <Header>
              <ButtonBackHeader onPress={()=> navigation.navigate('Search')}>
                    <IconHeader name="arrowleft"/>
              </ButtonBackHeader>
                <HeaderTitle>
                    Questionário
                </HeaderTitle>
            </Header>
              <ScrollViewDisplay >
            {questions_data.map(question => (
                <QuestionContainer key={question.id}>
                        <TitleSearch id={question.id} title={question.question} />
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
                <TextLabel style={{opacity:buttonDisabled?  0.5 : 1}}>Próximo</TextLabel>
                <Icon style={{opacity:buttonDisabled ?  0.5 : 1}} name="right"/>
              </ButtonNext>
            </ButtonFooter>
        </Container>
    )
}