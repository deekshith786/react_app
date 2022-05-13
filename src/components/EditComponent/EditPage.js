import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

export const EditPagecomponent = (params) => {
  return (
    <div>
      <h1>Edit</h1>
      <hr />
      <h3>Market</h3>
      <h3>Photp</h3>
      <Button variant="contained">Contained</Button>
      <p>No file choosen</p>
      <div>
        <Card>
          <CardContent>
            <Grid container spacing={1}></Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Name" placeholder="Name" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField fullWidth label="Select" placeholder="Select" variant="outlined"></TextField>
            </Grid>
          </CardContent>
        </Card>
        <h4>TimeZone</h4>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
        ></TextField>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          helperText="Please select your currency"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="State"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Latitude"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Longitude"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Map Zoom"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
      </div>
      <FormControl>
        <FormLabel>
          <b>Name</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>State</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Latitute</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Longitude</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Map zoom</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Android map zoom</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>ios map zoom</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Default home screen</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Reservation maximum duration(in days)</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Validation account reservation maximum duration</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormLabel>
          <b>Description</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <FormControl>
        <FormLabel>
          <b>Description</b>
        </FormLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </div>
  );
};
