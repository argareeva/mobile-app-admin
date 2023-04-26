import { Create, List, Datagrid, Edit, EditButton, SimpleForm, BooleanField, BooleanInput, 
  EmailField, TextField, TextInput, PasswordInput, NumberField, NumberInput} from 'react-admin';

export const StudentList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='fullName' />
      <EmailField source='email' />
      <TextField source='dan' />
      <TextField source='category' />
      <TextField source='direction' />
      <BooleanField source='participation' />
      <TextField source='medals' />
      <TextField source='role' />
      <TextField source='password' />
      <EditButton />
    </Datagrid>
  </List>
);

export const StudentEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='dan'/>
        <TextInput source='category'/>
        <TextInput source='direction'/>
        <BooleanInput source='participation'/>
        <TextInput source='medals'/>
        <TextInput disabled source='role'/>
        <PasswordInput disabled source='password'/>
      </SimpleForm>
    </Edit>
  );

  export const StudentCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='dan'/>
        <TextInput source='category'/>
        <TextInput source='direction'/>
        <BooleanInput source='participation'/>
        <TextInput source='medals'/>
        <TextInput source='role'/>
        <PasswordInput source='password'/>
      </SimpleForm>
    </Create>
  );