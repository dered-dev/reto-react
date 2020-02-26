import React from 'react'
import AppFooterColumn from './AppFooterColumn'
import LinkFooter from './LinkFooter'

function Footer() {
  return (
    <div className="AppFooter">
      <div className="AppFooter__columns-row">
        <div className="AppFooter__column AppFooter__column--branding">
          <svg className="AppFooter__logomark Icon Icon--mix-logomark" aria-hidden="true">
            <use xlinkhref="#mix-logomark"></use></svg>
        </div>
        <AppFooterColumn>
          <LinkFooter
            href=""
            className=""
            text="Contact Us"
          />
          <LinkFooter
            href=""
            className=""
            text="Careers"
          />
          <LinkFooter
            href=""
            className=""
            text="Press"
          />
          <LinkFooter
            href=""
            className=""
            text="Terms"
          />
          <LinkFooter
            href=""
            className=""
            text="Privacy"
          />
          <LinkFooter
            href=""
            className=""
            text="Guidelines"
          />
          <LinkFooter
            href=""
            className=""
            text="Community"
          />
        </AppFooterColumn>
        <AppFooterColumn>
          <LinkFooter
            href="https://instagram.com/getmixapp"
            className=""
            text="Instagram"
          />
          <LinkFooter
            href="https://facebook.com/getmix"
            className=""
            text="Facebook"
          />
          <LinkFooter
            href="https://twitter.com/getmix"
            className=""
            text="Twitter"
          />
        </AppFooterColumn>
        <AppFooterColumn
          className="AppFooter__badges AppFooter__badges--apps"
        >
          <LinkFooter
            className=""
            text="Mobile Apps"
          />
          <LinkFooter
            href="https://link.mix.com/byTbvDe29E"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-ios-da59dd3a382d00c584b04846db82a0cb.svg" alt="logo" />
          </LinkFooter>
          <LinkFooter
            href="https://link.mix.com/byTbvDe29E"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-android-4561a3c6c37929943ff990968ec1465e.svg" alt="logo" />
          </LinkFooter>

        </AppFooterColumn>

        <AppFooterColumn></AppFooterColumn>
        <div className="AppFooter__badges AppFooter__badges--extensions">
          <div className="AppFooter__heading AppFooter__heading--download">Browser extensions</div>
          <LinkFooter
            href="https://chrome.google.com/webstore/detail/mix/pakcjidblmfebhbgoggdgbjkpjhefpgh"
            className="AppFooter__badge PromoBadge PromoBadge--type-extension PromoBadge--extension-chrome"
            title="Install our Chrome extension"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-chrome-25de072c4be2acafa5102518b3a9a41b.png" alt="logo" />
          </LinkFooter>
          <LinkFooter
            href="https://addons.mozilla.org/en-US/firefox/addon/mix-ext/"
            className="AppFooter__badge PromoBadge PromoBadge--type-extension PromoBadge--extension-firefox Add-on"
            title="Install our Firefox extension"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-firefox-3dd1cb36ae454463e4e07206d2bad3ee.png" alt="logo" />
          </LinkFooter>
          <LinkFooter
            href="https://microsoftedge.microsoft.com/addons/detail/jffkbfhhjokopidblbjfkippklbhegoj"
            className="AppFooter__badge PromoBadge PromoBadge--type-extension PromoBadge--extension-msedge"
            title="Install our Edge extension"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-msedge-a053e8f09cebd1982ce4dd85c347b17f.png" alt="logo" />
          </LinkFooter>
          <LinkFooter
            href="https://itunes.apple.com/us/app/mix/id1451360134?mt=12"
            className="AppFooter__badge PromoBadge PromoBadge--type-extension PromoBadge--extension-safari"
            title="Install our Safari extension"
          >
            <img src="https://assets.mix.com/assets/img/common/badge-safari-0cb7a26d05ab96d6f12f85d3702042d0.png" alt="logo" />
          </LinkFooter>
        </div>
      </div>
      <div className="AppFooter__badges AppFooter__badges--buttons">
        <LinkFooter
          className="AppFooter__href"
          href="https://community.mix.com/blog/2018/7/12/add-mix-button"
          text="Add a Mix Button to Your Site"
        />
      </div>
      <div className="AppFooter__copyright-row">
        <div className="AppFooter__copyright">
          <LinkFooter
            className="AppFooter__copyright-href"
            text="© 2020 Mix is an Expa company"
          />
        </div>
        <AppFooterColumn
          className="AppFooter__social-accounts"
        >
          <LinkFooter
            className="AppFooter__social-account AppFooter__social-account--instagram"
            href="https://instagram.com/getmixapp"
          >
            <img src="https://assets.mix.com/assets/img/app-footer/instagram-688eb47192f962618a67a082482bb801.svg" alt="logo" />
          </LinkFooter>
          <LinkFooter
            className="AppFooter__social-account AppFooter__social-account--instagram"
            href="https://instagram.com/getmixapp"
          >
            <img src="https://assets.mix.com/assets/img/app-footer/facebook-a2090ffc8fe15bf87e20dc731637672a.svg" alt="logo" />
          </LinkFooter>
          <LinkFooter
            className="AppFooter__social-account AppFooter__social-account--instagram"
            href="https://instagram.com/getmixapp"
          >
            <img src="https://assets.mix.com/assets/img/app-footer/twitter-23f155b09bae5a0b3cbea38110eb1fd4.svg" alt="logo" />
          </LinkFooter>
        </AppFooterColumn>
      </div>
    </div >
  )
}

export default Footer