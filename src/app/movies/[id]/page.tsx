import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export default function page({ params: { id } }: Params) {
  return <div>page {id}</div>;
}
