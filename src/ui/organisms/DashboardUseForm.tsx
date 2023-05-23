import useForm from '@Hooks/useForm';

function DashboardUseForm() {
  const { register } = useForm();
  return (
    <div className="naxatw-flex naxatw-gap-1">
      <form>
        <input type="text" placeholder="test textfield" {...register('name')} />
      </form>
    </div>
  );
}
export default DashboardUseForm;
