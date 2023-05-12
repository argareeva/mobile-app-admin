import { List, Datagrid, TextField, DateField, RichTextField, NumberField, EmailField } from 'react-admin';

const FeedbackFilter = (props) => (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='Feedback' source='id' reference='Feedback' allowEmpty>
        <SelectInput optionText='id' />
      </ReferenceInput>
    </Filter>
  );

  const TournamentFilter = (props) => (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='Tournament' source='id' reference='TournamentForm' allowEmpty>
        <SelectInput optionText='id' />
      </ReferenceInput>
    </Filter>
  );

  const TrialFilter = (props) => (
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='Trial' source='id' reference='TrialForm' allowEmpty>
        <SelectInput optionText='id' />
      </ReferenceInput>
    </Filter>
  );

export const Feedback = props => (
    <List filter={<FeedbackFilter />}{...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <RichTextField source='content' />
        </Datagrid>
    </List>
);

export const TournamentForm = props => (
    <List filter={<TournamentFilter />}{...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <DateField source='birthday' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <TextField source='category' />
        </Datagrid>
    </List>
);

export const TrialForm = props => (
    <List filter={<TrialFilter />}{...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <DateField source='birthday' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <DateField source='date' />
            <TextField source='comment' />
        </Datagrid>
    </List>
);
