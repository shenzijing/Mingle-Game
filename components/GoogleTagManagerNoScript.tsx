"use client";

interface Props {
    gtmId: string;
}

export function GoogleTagManagerNoScript({ gtmId }: Props) {
    return (
        <noscript
            dangerouslySetInnerHTML={{
                __html: `
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        `,
            }}
        />
    );
}