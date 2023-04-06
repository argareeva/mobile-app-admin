import { Create, List, Datagrid, TextField, DateField, DateInput, Edit, SimpleForm, TextInput, EditButton, DateField, DateInput} from 'react-admin';

export const NewsList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='header' />
      <DateField source='date' />
      <TextField source='content' />
      <EditButton />
    </Datagrid>
  </List>
);

export const NewsEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='header' />
        <DateInput source='date' />
        <TextInput source='content'/>
      </SimpleForm>
    </Edit>
  );

  export const NewsCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='header' />
        <DateInput source='date' />
        <TextInput source='content'/>
      </SimpleForm>
    </Create>
  );