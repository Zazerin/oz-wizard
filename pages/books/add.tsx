import React from "react";
import { Box, Card, CardContent } from "@material-ui/core";
import FormicTextField from "components/FormicTextField";
import { object, string, number } from "yup";
import {
  FormikWizardController,
  FormikStep
} from "components/FormikWizardController";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <FormikWizardController
          initialValues={{}}
          onSubmit={async (values) => {
            await fetch("/api/books", {
              method: "POST",
              body: JSON.stringify(values)
            });
            router.push("/books");
          }}
        >
          <FormikStep
            label="General"
            validationSchema={object({
              title: string().required(),
              author: string().required()
            })}
          >
            <Box mb={2}>
              <FormicTextField name="title" label="Title" />
            </Box>
            <Box mb={2}>
              <FormicTextField name="author" label="Author" />
            </Box>
          </FormikStep>
          <FormikStep
            label="Second step"
            validationSchema={object({
              pages: number().required()
            })}
          >
            <Box mb={2}>
              <FormicTextField name="pages" type="number" label="Pages" />
            </Box>
            <Box mb={2}></Box>
          </FormikStep>
          <FormikStep label="More Info">
            <Box mb={2}>
              <FormicTextField
                name="description"
                label="Description"
                multiline
                rows={5}
              />
            </Box>
          </FormikStep>
        </FormikWizardController>
      </CardContent>
    </Card>
  );
}
