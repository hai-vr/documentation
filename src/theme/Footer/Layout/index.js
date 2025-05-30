import React from 'react';
import clsx from 'clsx';

import PatreonPlusOnly from '@site/src/pages/internal/patreonplusonly.mdx'
import PatreonPlus from '@site/src/pages/internal/patreonplus.mdx'
import PatreonMore from '@site/src/pages/internal/patreonmore.json'
import patreonStyles from '@site/src/pages/patreon.module.css';
import {Patronelt} from '@site/src/components/Patronelt';

export default function FooterLayout({style, links, logo, copyright}) {
    let footer;
    if (typeof window !== "undefined"
        && (window.location.pathname === "/" || window.location.pathname === "/welcome" || window.location.pathname === "/all")
    ) {
        footer = undefined;
    }
    else {
        footer = <div className={clsx(patreonStyles.centerline)} data-theme="dark">
            <p>Thank you to all of my supporters on Patreon ⭐</p>
            {/*<PatreonPlus />*/}
            <PatreonPlusOnly />
            {/*<Patronelt k="-1">⭐ {PatreonMore.plusactive} and <strong>{PatreonMore.regactive}</strong> more <strong><a href="/docs/other/supporters" className={clsx(patreonStyles.footerlink)}>Patreon Supporters ...</a></strong></Patronelt>*/}
            <Patronelt k="-1">⭐ <strong>{PatreonMore.allactive}</strong> total <strong><a href="/docs/other/supporters" className={clsx(patreonStyles.footerlink)}>Patreon Supporters ...</a></strong></Patronelt>
        </div>
    }

    return (
        <footer
            className={clsx('footer', {
                'footer--dark': style === 'dark',
            })}>
        {footer}
          {/*<br/>*/}
          <div className="container container-fluid">
              {links}
              {(logo || copyright) && (
                  <div className="footer__bottom text--center">
                      {logo && <div className="margin-bottom--sm">{logo}</div>}
                      {copyright}
                  </div>
              )}
          </div>
      </footer>
  );
}
