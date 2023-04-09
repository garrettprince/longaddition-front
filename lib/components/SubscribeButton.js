import React from "react";
import Link from "next/link";

function SubscribeButton() {
  return (
    <Link href='/subscribe' className="font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 pt-[.2rem] py-0 mr-1">
      SUBSCRIBE
    </Link>
  );
}

export default SubscribeButton;
