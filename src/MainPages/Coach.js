import { Create, List, Datagrid, Edit, EditButton, SimpleForm, EmailField, TextField, TextInput,
  PasswordInput,  RichTextField, NumberField, NumberInput} from 'react-admin';

export const CoachList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='fullName' />
      <EmailField source='email' />
      <RichTextField source='description' />
      <TextField source='password' />
      <EditButton />
    </Datagrid>
  </List>
);

export const CoachEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='description'/>
        <PasswordInput disabled source='password' />
      </SimpleForm>
    </Edit>
  );

  export const CoachCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='fullName' />
        <TextInput source='email' />
        <TextInput source='description'/>
        <PasswordInput source='password' />
      </SimpleForm>
    </Create>
  );