import React from 'react';

import {
  Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput, ImageField, ImageInput,
  RichTextField, DateField, DateTimeInput, NumberField, NumberInput, useCreate, useRecordContext
} from 'react-admin';

const NewsFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='News' source='id' reference='News' allowEmpty>
      <SelectInput optionText='id' />
    </ReferenceInput>
  </Filter>
);

export const NewsList = props => (
  <List filter={<NewsFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='header' />
      <DateField source='date' />
      <RichTextField source='content' />
      <ImageField source="picture" title="Picture" />
      <EditButton />
    </Datagrid>
  </List>
);

const PreviewImage = ({ source }) => {
  let record = useRecordContext();
  if (record.undefined) {
    record = {
      [source]: record.undefined,
    };
  }
  return <ImageField source={source} record={record} title="Picture" />;
};

export const NewsEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput disabled source='id' />
      <TextInput source='header' />
      <DateTimeInput source='date' />
      <TextInput source='content' />
      <ImageInput source='picture'>
        <PreviewImage source='src' />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const NewsCreate = props => {
  const [image, setImage] = React.useState()
  const [imageBlob, setImageBlob] = React.useState('')
  const [create] = useCreate();

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let res
    reader.onload = function () {
      res = reader.result
      setImageBlob(res)
      return reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return res
  }

  const postSave = (data) => {
    data.picture = imageBlob
    console.log('data', data)
    create('user', { data });
  };

  React.useEffect(() => {
    if (image) {
      setImageBlob(getBase64(image))
    }
  }, [image])

  return (
    (
      <>
        <Create>
          <SimpleForm onSubmit={postSave}>
            <TextInput source='header' />
            <DateTimeInput source='date' />
            <TextInput source='content' />
            <ImageInput source="picture" label="Related pictures" onChange={(file) => setImage(file)} {...props}>
              <ImageField source="url" title="title" />
            </ImageInput>
            <div>
              <img width='60%' src={imageBlob} />
            </div>
          </SimpleForm>
        </Create>
      </>
    )
  )
};
