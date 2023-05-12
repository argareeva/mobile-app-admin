import {
    Edit, Create, SimpleForm, Datagrid, EditButton, List, ReferenceInput, ReferenceField,
    TextInput, TextField, SelectInput, NumberField, NumberInput, RichTextField
} from 'react-admin';

const WorkoutFilter = (props) => (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='Workout' source='id' reference='Workout' allowEmpty>
        <SelectInput optionText='id' />
      </ReferenceInput>
    </Filter>
  );

export const WorkoutList = props => (
    <List filter={<WorkoutFilter />} {...props}>
        <Datagrid>
            <NumberField source='id' />
            <RichTextField source='schedule' />
            <TextField source='group' />
            <ReferenceField source='coach_id' reference='Coach'>
                <TextField source='fullName' />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const WorkoutEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput disabled source='id' />
            <TextInput source='schedule' />
            <TextInput source='group' />
            <ReferenceInput source='coach_id' reference='Coach'>
                <SelectInput optionText='fullName' />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const WorkoutCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='schedule' />
            <TextInput source='group' />
            <ReferenceInput source='coach_id' reference='Coach'>
                <SelectInput optionText='fullName' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);