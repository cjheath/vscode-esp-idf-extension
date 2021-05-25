// Copyright 2019 Espressif Systems (Shanghai) CO LTD
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { SetupPanel } from "./SetupPanel";

export function sendEspIdfDownloadProgress(
  id: string,
  updatedPercentage: string
) {
  SetupPanel.postMessage({
    command: "updateIdfDownloadStatusPercentage",
    id,
    percentage: updatedPercentage,
  });
}

export function sendEspIdfDownloadDetail(id: string, updatedDetail: string) {
  SetupPanel.postMessage({
    command: "updateIdfDownloadStatusDetail",
    detail: updatedDetail,
    id,
  });
}

export function sendDownloadedZip(downloadedPath: string) {
  SetupPanel.postMessage({
    command: "setEspIdfErrorStatus",
    errorMsg: `ESP-IDF is downloaded in ${downloadedPath}`,
  });
}

export function sendExtractedZip(extractedPath: string) {
  SetupPanel.postMessage({
    command: "setEspIdfErrorStatus",
    errorMsg: `ESP-IDF is extracted in ${extractedPath}`,
  });
}

export function sendPkgDownloadPercentage(
  pkgName: string,
  updatedPercentage: string
) {
  SetupPanel.postMessage({
    command: "updatePkgDownloadPercentage",
    id: pkgName,
    percentage: updatedPercentage,
  });
}

export function sendPkgChecksumResult(
  pkgName: string,
  updatedChecksumResult: boolean
) {
  SetupPanel.postMessage({
    command: "updatePkgChecksumResult",
    id: pkgName,
    hashResult: updatedChecksumResult,
  });
}

export function sendPkgDownloadDetail(pkgName: string, updatedDetail: string) {
  SetupPanel.postMessage({
    command: "updatePkgDownloadDetail",
    id: pkgName,
    progressDetail: updatedDetail,
  });
}

export function sendPkgDownloadFailed(pkgName: string, failedFlag: boolean) {
  SetupPanel.postMessage({
    command: "updatePkgDownloadFailed",
    id: pkgName,
    hasFailed: failedFlag,
  });
}

export function sendIdfGitDownloadProgress(
  id: string,
  updatedPercentage: string
) {
  SetupPanel.postMessage({
    command: "updateIdfGitDownloadPercentage",
    id,
    percentage: updatedPercentage,
  });
}

export function sendIdfGitDownloadDetail(id: string, updatedDetail: string) {
  SetupPanel.postMessage({
    command: "updateIdfGitDownloadDetail",
    detail: updatedDetail,
    id,
  });
}

export function sendIdfPythonDownloadProgress(
  id: string,
  updatedPercentage: string
) {
  SetupPanel.postMessage({
    command: "updateIdfPythonDownloadPercentage",
    id,
    percentage: updatedPercentage,
  });
}

export function sendIdfPythonDownloadDetail(id: string, updatedDetail: string) {
  SetupPanel.postMessage({
    command: "updateIdfPythonDownloadDetail",
    detail: updatedDetail,
    id,
  });
}