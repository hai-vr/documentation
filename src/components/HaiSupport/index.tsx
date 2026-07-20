import React from 'react';
import Translate from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

export default function HaiSupport(): JSX.Element {
  return (
    <Admonition type="info" title={<Translate id="hai.support.info">Your support makes this free tool possible</Translate>}>
      <Translate id="hai.support.thanks">Thanks to my Patreon supporters for making tool creation sustainable ⭐</Translate>
      <br />
      <br />
      <Translate
        id="hai.support.patreon_link"
        values={{
          link: (
            <Link href="https://www.patreon.com/vr_hai">
              <Translate id="hai.support.patreon_link_text">visit my Patreon</Translate>
            </Link>
          ),
        }}>
        {'If you find success in using my free tools, {link} to support the creation of these tools.'}
      </Translate>
      <br />
      <Translate
        id="hai.support.rewards"
        values={{
          link: (
            <Link to="/docs/other/patreon">
              <Translate id="hai.support.rewards_link_text">additional tools as Patreon rewards</Translate>
            </Link>
          ),
        }}>
        {'You\'ll also get {link}.'}
      </Translate>
    </Admonition>
  );
}
