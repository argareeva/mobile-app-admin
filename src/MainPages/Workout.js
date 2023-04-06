import {Edit, TextInput, ReferenceInput, SimpleForm, Datagrid, EditButton, List, ReferenceField, TextField, SelectInput, Create, Filter} from 'react-admin';

export const WorkoutList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='schedule' />
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
            <TextInput disabled source='id' />
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