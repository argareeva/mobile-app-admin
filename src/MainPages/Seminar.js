import {
  Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput, Filter,
  RichTextField, DateField, DateTimeInput, NumberField, NumberInput, ReferenceInput, SelectInput,
} from 'react-admin';

const SeminarFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='Seminar' source='name' reference='Seminar' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);

export const SeminarList = props => (
  <List filter={<SeminarFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='name' />
      <RichTextField source='description' />
      <DateField source='date' />
      <TextField source='place' />
      <EditButton />
    </Datagrid>
  </List>
);

export const SeminarEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput disabled source='id' />
      <TextInput source='name' />
      <TextInput source='description' />
      <DateTimeInput source='date' />
      <TextInput source='place' />
    </SimpleForm>
  </Edit>
);

export const SeminarCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='description' />
      <DateTimeInput source='date' />
      <TextInput source='place' />
    </SimpleForm>
  </Create>
);