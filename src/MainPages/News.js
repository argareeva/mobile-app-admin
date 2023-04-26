import { Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput,
   RichTextField, DateField, DateTimeInput, NumberField, NumberInput} from 'react-admin';

export const NewsList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='header' />
      <DateField source='date' />
      <RichTextField source='content' />
      <EditButton />
    </Datagrid>
  </List>
);

export const NewsEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='header' />
        <DateTimeInput source='date' />
        <TextInput source='content'/>
      </SimpleForm>
    </Edit>
  );

  export const NewsCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='header' />
        <DateTimeInput source='date' />
        <TextInput source='content'/>
      </SimpleForm>
    </Create>
  );