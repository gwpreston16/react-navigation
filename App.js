import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Container, Button, Input } from 'native-base';

function HomeScreen({ navigation }) {
    const [text, setText] = React.useState('');

    return (
        <Container style={{ flex: 1, alignItems: 'center' , justifyContent: 'center', padding: 20}}>
            <Input
                placeholder='What is your name?'
                value={text}
                onChangeText={text => setText(text)}
            />
            <Button onPress={() => navigation.navigate('Welcome', {myName: text})} block bordered primary>
                <Text>Submit</Text>
            </Button>
        </Container>
    );
}

function WelcomeScreen({ route, navigation }) {
    const { myName } = route.params;

    return (
        <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome {myName}</Text>
        </Container>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;