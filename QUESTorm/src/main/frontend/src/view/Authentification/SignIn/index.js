import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Card, Box, Button, TextField, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../../../store';
import { signInApi } from '../../../apis'; // Update this import with the correct path

function SignIn(props) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { setAuthView } = props;
  const [cookies, setCookies] = useCookies();
  const { user, setUser } = useUserStore();

  const signInHandler = async () => {
    if (userEmail.length === 0 || userPassword.length === 0) {
      alert('이메일과 비밀번호를 입력하세요');
      return;
    }

    const data = {
      userEmail,
      userPassword,
    };

    const signInResponse = await signInApi(data);
    if (!signInResponse) {
      alert('로그인 실패');
      return;
    }

    if (!signInResponse.result) {
      alert('로그인 실패');
      return;
    }

    const { token, exprTime, user } = signInResponse.data; // Fix variable name
    const expires = new Date();
    expires.setMilliseconds(expires.getMilliseconds() + exprTime);

    setCookies('token', token, { expires });
    setUser(user);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: '50vw', padding: 5 }}>
      {user != null && <>{user.userNickname}</>}
      <Box>
        <Typography variant="h4">로그인</Typography>
      </Box>
      <Box height={'50vh'}>
        <TextField
          fullWidth
          label="이메일 주소"
          type="email"
          variant="standard"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="비밀번호"
          type="password"
          variant="standard"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </Box>
      <Box component="div">
        <Button fullWidth onClick={() => signInHandler()} variant="contained">
          로그인
        </Button>
      </Box>
      <Box component="div" display="flex" mt={2}>
        <Typography>신규 사용자 이신가요?{' '}</Typography>
        <Typography ml={1} onClick={() => setAuthView(true)}>
          회원가입
        </Typography>
      </Box>
    </Card>
  );
}

SignIn.propTypes = {
  setAuthView: PropTypes.func.isRequired,
};

export default SignIn;
