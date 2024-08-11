export const getCurrentPage = () => {
  let currentPage = 1;
  const setCurrentPage = (value: number) => {
    currentPage = value;
  };
  console.log("currentPage", currentPage);
  return { currentPage, setCurrentPage };
};
