import { Helmet } from 'react-helmet-async';

const useHead = (title) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default useHead;
