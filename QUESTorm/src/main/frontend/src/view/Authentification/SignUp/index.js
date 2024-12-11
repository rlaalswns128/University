import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Card, Button, Typography } from '@mui/material';

function SignUp(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    const { setAuthView } = props;

    const signUpHandler = async () => {
        if (userPassword !== userPasswordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const data = {
            userEmail,
            userPassword,
            userPasswordConfirm,
            userName,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/auth/signUp", data);
            // Handle successful signup here
            console.log(response.data);
        } catch (error) {
            // Handle signup failure and show error message
            console.error("회원가입 요청 중 오류가 발생했습니다:", error);
        }
    };

    return (
        <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
            <Box>
                <Typography variant='h5'>회원가입</Typography>
            </Box>
            <Box height={'50vh'}>
                <TextField fullWidth label="이메일 주소" type="email" variant="standard" onChange={(e) => setUserEmail(e.target.value)}/>
                <TextField fullWidth label="이름" variant="standard" onChange={(e) => setUserName(e.target.value)}/>
                <TextField fullWidth label="비밀번호" type="password" variant="standard" onChange={(e) => setUserPassword(e.target.value)}/>
                <TextField fullWidth label="비밀번호 확인" type="password" variant="standard" onChange={(e) => setUserPasswordConfirm(e.target.value)}/>
            </Box>
            <Box>
                <Button fullWidth onClick={() => signUpHandler()} variant="contained">회원가입</Button>
            </Box>
            <Box component='div' display='flex' mt={2}>
                <Typography>이미 계정이 있으신가요?</Typography>
                <Typography fontWeight={800} ml={1} onClick={() => setAuthView(false)}>로그인</Typography>
            </Box>
        </Card>
    );
}

SignUp.propTypes = {
    setAuthView: PropTypes.func.isRequired,
};

export default SignUp;
