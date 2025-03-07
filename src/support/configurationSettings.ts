/*
 * Project: ESP-IDF VSCode Extension
 * File Created: Wednesday, 30th December 2020 4:02:17 pm
 * Copyright 2020 Espressif Systems (Shanghai) CO LTD
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { reportObj } from "./types";
import * as vscode from "vscode";

export function getConfigurationSettings(
  reportedResult: reportObj,
  scope?: vscode.ConfigurationScope
) {
  const winFlag = process.platform === "win32" ? "Win" : "";
  reportedResult.configurationSettings = {
    espAdfPath: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.espAdfPath" + winFlag),
    espIdfPath: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.espIdfPath" + winFlag),
    espMdfPath: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.espMdfPath" + winFlag),
    customExtraPaths: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.customExtraPaths"),
    customExtraVars: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.customExtraVars"),
    pythonBinPath: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.pythonBinPath" + winFlag),
    pythonPackages: [],
    serialPort: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.port" + winFlag),
    openOcdConfigs:
      vscode.workspace.getConfiguration("", scope).get("idf.openOcdConfigs") ||
      [],
    toolsPath: vscode.workspace
      .getConfiguration("", scope)
      .get("idf.toolsPath" + winFlag),
    systemEnvPath:
      process.platform === "win32" ? process.env.Path : process.env.PATH,
  };
}
