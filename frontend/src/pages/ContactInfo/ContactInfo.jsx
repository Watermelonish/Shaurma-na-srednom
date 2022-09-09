import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import "./ContactInfo.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const ContactInfo = () => {

  const [theme, setTheme] = useState("");

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Box component="span" sx={{ p: 25, border: "1px solid grey",  boxShadow: 20, borderRadius: 2}} className="contactUsBox">
      <h1>Контакты:</h1>
      <p>
        <span className="contHead">Нижний Новгород, ул. Костина,13</span>
      </p>
      <div>
        +7 (902) 300-30-30
        <br />
        <br />
        +7 (831) 230-00-00
        <br />
        <br /> +7 (831) 4-244-243
        <br />
        <br /> E-mail: vsemlavash@mail.ru
      </div>
      <h1>Реквизиты:</h1>
      <div>ИП Галаджян Мария Абраамовна</div>
      <br />
      <div>ИНН: 522501977407</div>
      <br />
      <div>ОГРНИП: 321527500061021</div>
      <br />
      <div>Юридический адрес: 603000, г. Нижний Новгород, пос. Луч, д. 20</div>
      <p>
        <span>Тел.: +7 (910) 884-31-97</span>
      </p>
      <div className="spaceAdd">
        <br />
      </div>
      <span>
        По вопросам качества продукции обращайтесь по телефону: <br />
        <span>+7 (910) 884-31-97</span>
        <br />
      </span>
      <h1>Обратная связь:</h1>

      <FormControl className="feedbackForm">
      <label>Ваше имя: <span class="red">*</span></label>
      <br />
        <TextField
          className="menuItem"
          required
          id="username"

        />
        <br />
        <label>Ваш телефон: <span class="red">*</span></label>
        <br />
        <TextField
          className="menuItem"
          required
          id="phone"

        />
        <br />
        <label>Ваш email: <span class="red">*</span></label>
        <br />
        <TextField
          className="menuItem"
          required
          id="Email"

        />
        <br />
        <label>Тема сообщения: <span class="red">*</span></label>
        <br />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">-- Выберите тему</InputLabel>
        <Select className="menuItem" name=""
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          label="Выберите тему"
          onChange={handleChange}
        >
          <MenuItem value={10} >Директору</MenuItem>
          <MenuItem value={'Мэнеджеру'}>Мэнеджеру</MenuItem>
          <MenuItem value={'Сотрудничество'}>Сотрудничество</MenuItem>
          <MenuItem value={30}>Прочее</MenuItem>
        </Select>
        </FormControl>
        
        <br />
        <label>
          Сообщение (вопрос): <span class="red"></span>
        </label>
        <br />
        <TextareaAutosize className="textArea"
          aria-label="minimum height"
          minRows={7}
          placeholder="... Ваш вопрос здесь"
          style={{ width: 490 }}
        />
        <br />
        <br />
        <br />
        <Button variant="contained" style={{ width: 150 }} endIcon={<SendIcon />}>
          Send
        </Button>
      </FormControl>
    </Box>
  );
};

export default ContactInfo;
