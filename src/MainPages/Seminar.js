import { Create, List, Datagrid, TextField, DateField, DateInput, Edit, SimpleForm, TextInput, EditButton, DateField, DateInput} from 'react-admin';

export const SeminarList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <DateField source='date' />
      <TextField source='description' />
      <EditButton />
    </Datagrid>
  </List>
);

export const SeminarEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <DateInput source='date' />
        <TextInput source='description'/>
      </SimpleForm>
    </Edit>
  );

  export const SeminarCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <DateInput source='date' />
        <TextInput source='description'/>
      </SimpleForm>
    </Create>
  );