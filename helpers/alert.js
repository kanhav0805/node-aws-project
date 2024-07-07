export const showSuccessMessage = (success) => (
  <div class="alert alert-success" role="alert">
    {success}
  </div>
);

export const showErrorMessage = (error) => (
  <div class="alert alert-danger" role="alert">
    {error}
  </div>
);
