import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { UnixInput } from "../../components/pages/UnixTimeConverter/UnixInput";
import { UnixOutput } from "../../components/pages/UnixTimeConverter/UnixOutput";
import { fullDateTimeFormat, getLocalTimeZone } from "../../utils/date";

const UnixTimeConverter: NextPage = () => {
  const [unixInput, setUnixInput] = useState<string>(Date.now().toString());
  const [localDate, setLocalDate] = useState<string>(
    new Date(parseInt(unixInput)).toString()
  );
  const [gmtDate, setGmtDate] = useState<string>(
    new Date(localDate).toUTCString()
  );

  useEffect(() => {
    if (!unixInput) {
      setLocalDate("");
      setGmtDate("");
      return;
    }

    const newLocalDate = new Date(parseInt(unixInput));

    setLocalDate(fullDateTimeFormat(newLocalDate, getLocalTimeZone()));
    setGmtDate(fullDateTimeFormat(newLocalDate, "UTC"));
  }, [unixInput]);

  return (
    <>
      <UnixInput setUnixInput={setUnixInput} unixInput={unixInput} />
      <UnixOutput
        localDate={localDate}
        gmtDate={gmtDate}
        unixInput={unixInput}
      />
    </>
  );
};

export default UnixTimeConverter;
