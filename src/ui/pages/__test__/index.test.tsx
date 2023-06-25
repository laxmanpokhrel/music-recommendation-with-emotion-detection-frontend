import { Button } from '@Atoms/radixComponents/Button';
import { comboboxTestData } from '@Constants/_test_/index.test';
import RoundedContainer from '@Molecules/RoundedContainer';
import Dropdown from '@Atoms/radixComponents/Dropdown';
import DatePicker from '@Atoms/radixComponents/DatePicker';
import { Input } from '@Atoms/radixComponents/Input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@Atoms/radixComponents/TabList';
import Combobox from '@Atoms/radixComponents/ComboBox';
import SearchCommand from '@Atoms/radixComponents/SearchCommand';
import Upload from '@Molecules/Upload';

export default function TestPage() {
  // const { values, handleSubmit, errors } = useForm({
  //   validationSchema: TestFormValidation,
  //   initialValues: {},
  //   preAction: (data) => {
  //     return data;
  //   },
  //   // postAction: (data) => {},
  // });

  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-6">
      <h1>Testing Page</h1>
      <h6>This page will not appear in production</h6>

      <h2>Upload</h2>
      <Upload className="naxatw-w-[11rem]" placeholder="Type Sth..." type="file" />
      {/* <h2>Form Demo</h2>
      <RoundedContainer className="naxatw-bg-gray-300 naxatw-p-2 naxatw-w-[50vw] naxatw-flex naxatw-flex-col naxatw-gap-2">
        <h5>This is a template form</h5>
        <div className="cover naxatw-flex naxatw-flex-col naxatw-gap-4">
          <div className="form naxatw-flex naxatw-gap-2 naxatw-w-full naxatw-justify-around">
            <div className="form-controls naxatw-flex-1 naxatw-flex naxatw-flex-col naxatw-gap-2">
              <FormControl
                type="combobox"
                label="Test Form Control"
                options={comboboxTestData}
                // {...register('combobox_one', { required: true })}
              />
              <FormControl
                type="combobox"
                options={comboboxTestData}
                placeholder="Choose"
                // {...register('combobox_one', { required: true })}
              />
              <FormControl
                type="combobox"
                label="Test Form Control"
                multiple
                options={comboboxTestData}
                // {...register('combobox_two', { required: true })}
              />
              <FormControl
                type="dropDown"
                label="Test Form Control"
                options={comboboxTestData}
                // {...register('drop_one', { required: true })}
              />
              <FormControl
                type="dropDown"
                label="Test Form Control"
                multiple
                options={comboboxTestData}
                // {...register('drop_two', { required: true })}
              />
              <FormControl
                type="text"
                label="Test Form Control"
                options={comboboxTestData}
                // {...register('text_field', { required: true })}
              />
            </div>
            <div className="form-actions">
              <div className="form-action">
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="form-values naxatw-flex-1">
            {Object.keys(values).map((key) => (
              <div key={key} className=" naxatw-flex naxatw-gap-2 naxatw-mb-1">
                <p>{key}: </p>
                <p className="naxatw-bg-green-300 naxatw-p-1 naxatw-rounded-r-xl">{values[key].toString()}</p>
              </div>
            ))}
            <p>Errors: {JSON.stringify(errors)}</p>
          </div>
        </div>
      </RoundedContainer> */}

      <h2>Radix components </h2>

      <h5>Combo box with search on dropdown single select</h5>
      <Combobox options={comboboxTestData} />

      <h5>Combo box with search on dropdown single select</h5>
      <Combobox options={comboboxTestData} multiple />

      <h5>Single select dropdown</h5>
      <Dropdown options={comboboxTestData} bindvalue="" />

      <h5>Multiselect select dropdown</h5>
      <Dropdown options={comboboxTestData} multiple bindvalue={[]} />

      <h5>Date Picker</h5>
      <DatePicker canType />

      <h5>Date Picker only select:</h5>
      <DatePicker />

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <h5>Input field With icon</h5>
      <RoundedContainer className="naxatw-flex naxatw-gap-1 naxatw-bg-gray-100 naxatw-p-5">
        <Input className="naxatw-w-[11rem]" hasIcon iconName="circle" placeholder="Type Sth..." varientSize="lg" />
        <Input className="naxatw-w-[11rem]" hasIcon iconName="circle" placeholder="Type Sth..." />
      </RoundedContainer>

      <h5>Input field</h5>
      <RoundedContainer className="naxatw-flex naxatw-gap-1 naxatw-bg-gray-100 naxatw-p-5">
        <Input className="naxatw-w-[11rem]" />
        <Input className="naxatw-w-[11rem]" varientSize="sm" />
      </RoundedContainer>

      <RoundedContainer className="naxatw-h-24 naxatw-bg-[#F2F2F2] naxatw-w-2/5 naxatw-p-4 ">
        <h3>Rounded Container</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet obcaecati ipsum numquam. Accusamus
          laudantium id repellendus eveniet at rerum ea enim, quis, explicabo reprehenderit aperiam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eum nam suscipit consequatur debitis velit!
        </p>
      </RoundedContainer>
      <h3>Primary Buttons</h3>
      <Button variant="primary" size="lg">
        Check Button
      </Button>
      <Button variant="primary" size="sm">
        Check Button
      </Button>
      <Button variant="primary-disabled" size="sm">
        Check Button
      </Button>

      <h3>Secondary Buttons</h3>
      <Button variant="secondary" size="lg">
        Check Button
      </Button>
      <Button variant="secondary" size="sm">
        Check Button
      </Button>
      <Button variant="secondary-disabled" size="sm">
        Check Button
      </Button>
      <h3>Linked Buttons</h3>
      <Button variant="link" size="lg">
        Check Button
      </Button>
      <Button variant="link" size="sm">
        Check Button
      </Button>
      <Button variant="link-disabled" size="sm">
        Check Button
      </Button>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <SearchCommand choose="id" options={comboboxTestData} />
    </div>
  );
}
