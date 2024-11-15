import { execSync } from "child_process";
import { PREFIX } from "./const.mjs";

export const fixLinuxLinks = () => {
  execSync(`patchelf --force-rpath --set-rpath '$ORIGIN' ./ffmpeg`, {
    cwd: "ffmpeg/" + PREFIX + "/bin",
    stdio: "inherit",
  });
  // Disabled, as we don't include ffprobe
  // execSync(`patchelf --force-rpath --set-rpath '$ORIGIN' ./ffprobe`, {
  //   cwd: "ffmpeg/" + PREFIX + "/bin",
  //   stdio: "inherit",
  // });
};
