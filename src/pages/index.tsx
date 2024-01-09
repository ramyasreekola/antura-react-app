import React, { useState } from "react";
import Head from 'next/head';
import UserInfoCard from "../components/UserInfoCard";
import { getUser } from "../api/user";
import { GetServerSideProps } from "next";
import { User } from "../types/user";
import CircularProgress from "@mui/material/CircularProgress";
import { Card, Button } from "@mui/material";

interface Props {
  initialUser?: User;
  error?: string;
}

const Home: React.FC<Props> = ({ initialUser, error: initialError }) => {
  const [user, setUser] = useState<User | undefined>(initialUser);
  const [error, setError] = useState<string | undefined>(initialError);
  const [isLoading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await getUser();
      setUser(response.results[0]);
      setError(undefined);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setError((error as Error).message);
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
         <Head>
        <title>Antura React App</title>
        <meta property="og:title" content="Antura React App" key="title" />
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <h1 style={{ marginLeft: '1.5rem' }}>Hello Antura!</h1>
      <Button style={{ marginLeft: '1.5rem' }} onClick={fetchUser} variant="contained">Generate New User</Button>
      {isLoading ? (
        <Card
          sx={{
            maxWidth: 445,
            m: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress />
        </Card>
      ) : (
        <div className="card">
          {user ? <UserInfoCard {...user} /> : error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getUser();
    const initialUser = response.results[0];
    return { props: { initialUser } };
  } catch (error) {
    return { props: { error: (error as Error).message } };
  }
};

export default Home;
