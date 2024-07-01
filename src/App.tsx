import { Stack, TextField } from "@mui/material";
import { antoTransform } from "./modules/encdec";
import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [encText, setEncText] = useState("");

  return (
    <Stack className={styles.spaceWrapper} spacing={2}>
      <TextField
        label="输入"
        multiline
        rows={6}
        value={encText}
        onChange={(e) => setEncText(e.target.value)}
      />

      <TextField
        label="输出"
        multiline
        InputProps={{
          readOnly: true,
        }}
        rows={6}
        value={antoTransform(encText)}
      />
    </Stack>
  );
}

export default App;
