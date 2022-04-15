import {
  useMediaQueries,
  withMediaQueriesServerSideData,
} from '@root/modules-media-queries';

import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  text: string;
}

const ExamplePage: NextPage<Props> = ({ text }) => {
  const mediaQueries = useMediaQueries();

  return (
    <div>
      <h1>Example page</h1>
      <p>{text}</p>

      <h2>Media Queries</h2>
      <ul>
        {Object.entries(mediaQueries).map(([key, value]) => (
          <li key={key}>
            {key}: {value ? 'True' : 'False'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props = {
    text: 'This message has been came from getServerSideProps',
  };

  return {
    props: withMediaQueriesServerSideData(props, ctx.req.headers),
  };
};

export default ExamplePage;
