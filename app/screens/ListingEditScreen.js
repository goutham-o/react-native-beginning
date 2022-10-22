import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Game", value: 4, backgroundColor: "red", icon: "apps" },
  { label: "Cars", value: 5, backgroundColor: "green", icon: "email" },
  { label: "Sports", value: 6, backgroundColor: "blue", icon: "lock" },
  { label: "Movie & Music", value: 7, backgroundColor: "red", icon: "apps" },
  { label: "Books", value: 8, backgroundColor: "green", icon: "email" },
  { label: "Others", value: 9, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppFormField
            keyboardType='numeric'
            maxLength={8}
            name='price'
            placeholder='Price'
            width={130}
          />
          <AppFormPicker
            items={categories}
            width={"60%"}
            name='category'
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder='Category'
          />
        </View>
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
