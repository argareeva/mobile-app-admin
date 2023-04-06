import { Create, List, Datagrid, BooleanField, BooleanInput, TextField, EmailField, Edit, SimpleForm, TextInput, EditButton} from 'react-admin';

export const StudentList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='fullName' />
      <EmailField source='email' />
      <TextField source='dan' />
      <TextField source='category' />
      <TextField source='direction' />
      <BooleanField source='participation' />
      <TextField source='medals' />
      <EditButton />
    </Datagrid>
  </List>
);

export const StudentEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='dan'/>
        <TextInput source='category'/>
        <TextInput source='direction'/>
        <BooleanInput source='participation'/>
        <TextInput source='medals'/>
      </SimpleForm>
    </Edit>
  );

  export const StudentCreate = props => (
    <Create {...props}>
      <SimpleForm>
      <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='dan'/>
        <TextInput source='category'/>
        <TextInput source='direction'/>
        <BooleanInput source='participation'/>
        <TextInput source='medals'/>
      </SimpleForm>
    </Create>
  );