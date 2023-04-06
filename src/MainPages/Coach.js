import { Create, List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, EditButton} from 'react-admin';

export const CoachList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='fullName' />
      <EmailField source='email' />
      <TextField source='description' />
      <EditButton />
    </Datagrid>
  </List>
);

export const CoachEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='description'/>
      </SimpleForm>
    </Edit>
  );

  export const CoachCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='description'/>
      </SimpleForm>
    </Create>
  );