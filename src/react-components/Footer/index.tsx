import React from 'react';

/* styles */
import { FooterStyled } from './style';
import {
   TiSocialGithubCircular,
   TiSocialTwitterCircular,
   TiSocialFacebookCircular,
   TiSocialInstagramCircular
} from 'react-icons/ti';

/* Components */
import Wrapper from '../Wrapper';

const Footer = () => {
   const SIZE: string = '2.5rem';
   const colors = {
      twitter: '#00acee',
      facebook: '#3b5998',
      github: '#2b3137',
      instagram: '#dd2a7b'
   }
   return (
      <Wrapper>
         <FooterStyled>
            <div className="social">
               <a href="">
                  <TiSocialInstagramCircular color={colors.instagram} size={SIZE} />
               </a>
               <a href="">
                  <TiSocialTwitterCircular color={colors.twitter} size={SIZE} />
               </a>
               <a href="">
                  <TiSocialFacebookCircular color={colors.facebook} size={SIZE} />
               </a>
               <a href="">
                  <TiSocialGithubCircular color={colors.github} size={SIZE} />
               </a>
            </div>
            <div className="copyright">
               <p>@ 2020 All rights reserved</p>
            </div>
         </FooterStyled>
      </Wrapper>
   )
}

export default Footer;
