import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";
import Link from "./link";

const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg="youtube.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = (props) => (
  <SimpleGrid
    columns={{ base: 1 }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <Box padding="24px" color="white" textAlign="center" {...props} />
);
const StyledLink = (props) => <Link padding="10px" color="white" {...props} />;

const Footer = ({ state }) => {
  return (
    <FooterSection alignSelf="flex-end">
      <FooterSectionItem fontWeight="bold" fontFamily="heading">
        <div>
          <StyledLink link="/tag/net/">.NET</StyledLink>
          <StyledLink
            link="/tag/netmc/"
            class="tag-cloud-link tag-link-568773924 tag-link-position-2"
            styleclass="font-size: 8pt;"
            aria-label=".netmc# (عنصر واحد)"
          >
            .netmc#
          </StyledLink>
          <StyledLink
            link="/tag/agile/"
            class="tag-cloud-link tag-link-11287 tag-link-position-3"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="agile (عنصرين)"
          >
            agile
          </StyledLink>
          <StyledLink
            link="/tag/ai/"
            class="tag-cloud-link tag-link-14067 tag-link-position-4"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="ai (عنصرين)"
          >
            ai
          </StyledLink>
          <StyledLink
            link="/tag/ajax/"
            class="tag-cloud-link tag-link-141 tag-link-position-5"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="AJAX (3 عناصر)"
          >
            AJAX
          </StyledLink>
          <StyledLink
            link="/tag/algorithms/"
            class="tag-cloud-link tag-link-3378 tag-link-position-6"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="Algorithms (9 عناصر)"
          >
            Algorithms
          </StyledLink>
          <StyledLink
            link="/tag/android/"
            class="tag-cloud-link tag-link-641922 tag-link-position-7"
            styleclass="font-size: 13.968992248062pt;"
            aria-label="Android (6 عناصر)"
          >
            Android
          </StyledLink>
          <StyledLink
            link="/tag/angualr/"
            class="tag-cloud-link tag-link-256543976 tag-link-position-8"
            styleclass="font-size: 8pt;"
            aria-label="angualr (عنصر واحد)"
          >
            angualr
          </StyledLink>
          <StyledLink
            link="/tag/angular/"
            class="tag-cloud-link tag-link-463744 tag-link-position-9"
            styleclass="font-size: 17.550387596899pt;"
            aria-label="ANGULAR (14 عنصرًا)"
          >
            ANGULAR
          </StyledLink>
          <StyledLink
            link="/tag/apache/"
            class="tag-cloud-link tag-link-3768 tag-link-position-10"
            styleclass="font-size: 8pt;"
            aria-label="apache (عنصر واحد)"
          >
            apache
          </StyledLink>
          <StyledLink
            link="/tag/api/"
            class="tag-cloud-link tag-link-4276 tag-link-position-11"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="API (عنصرين)"
          >
            API
          </StyledLink>
          <StyledLink
            link="/tag/asp/"
            class="tag-cloud-link tag-link-9817 tag-link-position-12"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="asp (3 عناصر)"
          >
            asp
          </StyledLink>
          <StyledLink
            link="/tag/asp-net/"
            class="tag-cloud-link tag-link-94234 tag-link-position-13"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="ASP.net (عنصرين)"
          >
            ASP.net
          </StyledLink>
          <StyledLink
            link="/tag/automation/"
            class="tag-cloud-link tag-link-44070 tag-link-position-14"
            styleclass="font-size: 8pt;"
            aria-label="automation (عنصر واحد)"
          >
            automation
          </StyledLink>
          <StyledLink
            link="/tag/aws/"
            class="tag-cloud-link tag-link-144203 tag-link-position-15"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="AWS (عنصرين)"
          >
            AWS
          </StyledLink>
          <StyledLink
            link="/tag/azure/"
            class="tag-cloud-link tag-link-335778 tag-link-position-16"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="azure (عنصرين)"
          >
            azure
          </StyledLink>
          <StyledLink
            link="/tag/backend/"
            class="tag-cloud-link tag-link-405217 tag-link-position-17"
            styleclass="font-size: 8pt;"
            aria-label="backend (عنصر واحد)"
          >
            backend
          </StyledLink>
          <StyledLink
            link="/tag/bash/"
            class="tag-cloud-link tag-link-2674 tag-link-position-18"
            styleclass="font-size: 8pt;"
            aria-label="BASH (عنصر واحد)"
          >
            BASH
          </StyledLink>
          <StyledLink
            link="/tag/big-data/"
            class="tag-cloud-link tag-link-2075170 tag-link-position-19"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="BIG Data (عنصرين)"
          >
            BIG Data
          </StyledLink>
          <StyledLink
            link="/tag/blockchain/"
            class="tag-cloud-link tag-link-64575263 tag-link-position-20"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="blockchain (4 عناصر)"
          >
            blockchain
          </StyledLink>
          <StyledLink
            link="/tag/blockchain-and-bitcoin/"
            class="tag-cloud-link tag-link-339092880 tag-link-position-21"
            styleclass="font-size: 8pt;"
            aria-label="Blockchain and Bitcoin (عنصر واحد)"
          >
            Blockchain and Bitcoin
          </StyledLink>
          <StyledLink
            link="/tag/blockhain/"
            class="tag-cloud-link tag-link-174468612 tag-link-position-22"
            styleclass="font-size: 8pt;"
            aria-label="blockhain (عنصر واحد)"
          >
            blockhain
          </StyledLink>
          <StyledLink
            link="/tag/books/"
            class="tag-cloud-link tag-link-178 tag-link-position-23"
            styleclass="font-size: 8pt;"
            aria-label="books (عنصر واحد)"
          >
            books
          </StyledLink>
          <StyledLink
            link="/tag/bootstrap/"
            class="tag-cloud-link tag-link-114042 tag-link-position-24"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="BOOTSTRAP (9 عناصر)"
          >
            BOOTSTRAP
          </StyledLink>
          <StyledLink
            link="/tag/bulma/"
            class="tag-cloud-link tag-link-237650 tag-link-position-25"
            styleclass="font-size: 8pt;"
            aria-label="BULMA (عنصر واحد)"
          >
            BULMA
          </StyledLink>
          <StyledLink
            link="/tag/business-analysis/"
            class="tag-cloud-link tag-link-24463 tag-link-position-26"
            styleclass="font-size: 8pt;"
            aria-label="business analysis (عنصر واحد)"
          >
            business analysis
          </StyledLink>
          <StyledLink
            link="/tag/c/"
            class="tag-cloud-link tag-link-2426 tag-link-position-27"
            styleclass="font-size: 19.720930232558pt;"
            aria-label="C (23 عنصرًا)"
          >
            C
          </StyledLink>
          <StyledLink
            link="/tag/c-2/"
            class="tag-cloud-link tag-link-1634593 tag-link-position-28"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="C# (3 عناصر)"
          >
            C#
          </StyledLink>
          <StyledLink
            link="/tag/ccna/"
            class="tag-cloud-link tag-link-38058 tag-link-position-29"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="CCNA (عنصرين)"
          >
            CCNA
          </StyledLink>
          <StyledLink
            link="/tag/chatbot/"
            class="tag-cloud-link tag-link-84261 tag-link-position-30"
            styleclass="font-size: 8pt;"
            aria-label="chatbot (عنصر واحد)"
          >
            chatbot
          </StyledLink>
          <StyledLink
            link="/tag/checf/"
            class="tag-cloud-link tag-link-178858313 tag-link-position-31"
            styleclass="font-size: 8pt;"
            aria-label="checf (عنصر واحد)"
          >
            checf
          </StyledLink>
          <StyledLink
            link="/tag/cisco/"
            class="tag-cloud-link tag-link-28532 tag-link-position-32"
            styleclass="font-size: 8pt;"
            aria-label="CISCO (عنصر واحد)"
          >
            CISCO
          </StyledLink>
          <StyledLink
            link="/tag/clear-code/"
            class="tag-cloud-link tag-link-20771052 tag-link-position-33"
            styleclass="font-size: 8pt;"
            aria-label="Clear Code (عنصر واحد)"
          >
            Clear Code
          </StyledLink>
          <StyledLink
            link="/tag/cloud/"
            class="tag-cloud-link tag-link-69816 tag-link-position-34"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="CLOUD (3 عناصر)"
          >
            CLOUD
          </StyledLink>
          <StyledLink
            link="/tag/cms/"
            class="tag-cloud-link tag-link-646 tag-link-position-35"
            styleclass="font-size: 8pt;"
            aria-label="cms (عنصر واحد)"
          >
            cms
          </StyledLink>
          <StyledLink
            link="/tag/competitive-programming/"
            class="tag-cloud-link tag-link-42308953 tag-link-position-36"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="Competitive programming (عنصرين)"
          >
            Competitive programming
          </StyledLink>
          <StyledLink
            link="/tag/compiler/"
            class="tag-cloud-link tag-link-9565 tag-link-position-37"
            styleclass="font-size: 8pt;"
            aria-label="COMPILER (عنصر واحد)"
          >
            COMPILER
          </StyledLink>
          <StyledLink
            link="/tag/computer-programming/"
            class="tag-cloud-link tag-link-44329 tag-link-position-38"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="COMPUTER PROGRAMMING (3 عناصر)"
          >
            COMPUTER PROGRAMMING
          </StyledLink>
          <StyledLink
            link="/tag/crm/"
            class="tag-cloud-link tag-link-4259 tag-link-position-39"
            styleclass="font-size: 8pt;"
            aria-label="CRM (عنصر واحد)"
          >
            CRM
          </StyledLink>
          <StyledLink
            link="/tag/cs/"
            class="tag-cloud-link tag-link-5724 tag-link-position-40"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="CS (4 عناصر)"
          >
            CS
          </StyledLink>
          <StyledLink
            link="/tag/cs50/"
            class="tag-cloud-link tag-link-37923420 tag-link-position-41"
            styleclass="font-size: 8pt;"
            aria-label="CS50 (عنصر واحد)"
          >
            CS50
          </StyledLink>
          <StyledLink
            link="/tag/css/"
            class="tag-cloud-link tag-link-169 tag-link-position-42"
            styleclass="font-size: 19.06976744186pt;"
            aria-label="CSS (20 عنصرًا)"
          >
            CSS
          </StyledLink>
          <StyledLink
            link="/tag/dart/"
            class="tag-cloud-link tag-link-325481 tag-link-position-43"
            styleclass="font-size: 14.511627906977pt;"
            aria-label="Dart (7 عناصر)"
          >
            Dart
          </StyledLink>
          <StyledLink
            link="/tag/database/"
            class="tag-cloud-link tag-link-475 tag-link-position-44"
            styleclass="font-size: 15.054263565891pt;"
            aria-label="Database (8 عناصر)"
          >
            Database
          </StyledLink>
          <StyledLink
            link="/tag/data-science/"
            class="tag-cloud-link tag-link-21818323 tag-link-position-45"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="Data science (عنصرين)"
          >
            Data science
          </StyledLink>
          <StyledLink
            link="/tag/data-structure/"
            class="tag-cloud-link tag-link-89467 tag-link-position-46"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="DATA STRUCTURE (5 عناصر)"
          >
            DATA STRUCTURE
          </StyledLink>
          <StyledLink
            link="/tag/data-structures/"
            class="tag-cloud-link tag-link-37687 tag-link-position-47"
            styleclass="font-size: 8pt;"
            aria-label="DATA STRUCTURES (عنصر واحد)"
          >
            DATA STRUCTURES
          </StyledLink>
          <StyledLink
            link="/tag/deno/"
            class="tag-cloud-link tag-link-4530079 tag-link-position-48"
            styleclass="font-size: 8pt;"
            aria-label="deno (عنصر واحد)"
          >
            deno
          </StyledLink>
          <StyledLink
            link="/tag/design-patterns/"
            class="tag-cloud-link tag-link-4884 tag-link-position-49"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="Design Patterns (5 عناصر)"
          >
            Design Patterns
          </StyledLink>
          <StyledLink
            link="/tag/devops/"
            class="tag-cloud-link tag-link-28070474 tag-link-position-50"
            styleclass="font-size: 17.22480620155pt;"
            aria-label="Devops (13 عنصرًا)"
          >
            Devops
          </StyledLink>
          <StyledLink
            link="/tag/di/"
            class="tag-cloud-link tag-link-130881 tag-link-position-51"
            styleclass="font-size: 8pt;"
            aria-label="DI (عنصر واحد)"
          >
            DI
          </StyledLink>
          <StyledLink
            link="/tag/django/"
            class="tag-cloud-link tag-link-15988 tag-link-position-52"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="DJANGO (3 عناصر)"
          >
            DJANGO
          </StyledLink>
          <StyledLink
            link="/tag/dneo/"
            class="tag-cloud-link tag-link-310668645 tag-link-position-53"
            styleclass="font-size: 8pt;"
            aria-label="DNEO (عنصر واحد)"
          >
            DNEO
          </StyledLink>
          <StyledLink
            link="/tag/docker/"
            class="tag-cloud-link tag-link-4504191 tag-link-position-54"
            styleclass="font-size: 16.031007751938pt;"
            aria-label="Docker (10 عناصر)"
          >
            Docker
          </StyledLink>
          <StyledLink
            link="/tag/encryption/"
            class="tag-cloud-link tag-link-6474 tag-link-position-55"
            styleclass="font-size: 8pt;"
            aria-label="ENCRYPTION (عنصر واحد)"
          >
            ENCRYPTION
          </StyledLink>
          <StyledLink
            link="/tag/entity-framework/"
            class="tag-cloud-link tag-link-1047186 tag-link-position-56"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="entity framework (3 عناصر)"
          >
            entity framework
          </StyledLink>
          <StyledLink
            link="/tag/erlang/"
            class="tag-cloud-link tag-link-214614 tag-link-position-57"
            styleclass="font-size: 8pt;"
            aria-label="ErLang (عنصر واحد)"
          >
            ErLang
          </StyledLink>
          <StyledLink
            link="/tag/es/"
            class="tag-cloud-link tag-link-16903 tag-link-position-58"
            styleclass="font-size: 8pt;"
            aria-label="ES (عنصر واحد)"
          >
            ES
          </StyledLink>
          <StyledLink
            link="/tag/es6/"
            class="tag-cloud-link tag-link-75148521 tag-link-position-59"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="ES6 (3 عناصر)"
          >
            ES6
          </StyledLink>
          <StyledLink
            link="/tag/express/"
            class="tag-cloud-link tag-link-87946 tag-link-position-60"
            styleclass="font-size: 8pt;"
            aria-label="express (عنصر واحد)"
          >
            express
          </StyledLink>
          <StyledLink
            link="/tag/expressjs/"
            class="tag-cloud-link tag-link-51954357 tag-link-position-61"
            styleclass="font-size: 8pt;"
            aria-label="EXPRESSJS (عنصر واحد)"
          >
            EXPRESSJS
          </StyledLink>
          <StyledLink
            link="/tag/firebase/"
            class="tag-cloud-link tag-link-13678279 tag-link-position-62"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="firebase (3 عناصر)"
          >
            firebase
          </StyledLink>
          <StyledLink
            link="/tag/flask/"
            class="tag-cloud-link tag-link-601345 tag-link-position-63"
            styleclass="font-size: 8pt;"
            aria-label="FLASK (عنصر واحد)"
          >
            FLASK
          </StyledLink>
          <StyledLink
            link="/tag/flowchart/"
            class="tag-cloud-link tag-link-205976 tag-link-position-64"
            styleclass="font-size: 8pt;"
            aria-label="FLOWCHART (عنصر واحد)"
          >
            FLOWCHART
          </StyledLink>
          <StyledLink
            link="/tag/flutte/"
            class="tag-cloud-link tag-link-45763398 tag-link-position-65"
            styleclass="font-size: 8pt;"
            aria-label="Flutte (عنصر واحد)"
          >
            Flutte
          </StyledLink>
          <StyledLink
            link="/tag/flutter/"
            class="tag-cloud-link tag-link-445023 tag-link-position-66"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="Flutter (9 عناصر)"
          >
            Flutter
          </StyledLink>
          <StyledLink
            link="/tag/font-end/"
            class="tag-cloud-link tag-link-175189935 tag-link-position-67"
            styleclass="font-size: 8pt;"
            aria-label="font-end (عنصر واحد)"
          >
            font-end
          </StyledLink>
          <StyledLink
            link="/tag/fp/"
            class="tag-cloud-link tag-link-108937 tag-link-position-68"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="FP (عنصرين)"
          >
            FP
          </StyledLink>
          <StyledLink
            link="/tag/front-end/"
            class="tag-cloud-link tag-link-278857 tag-link-position-69"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="front-end (4 عناصر)"
          >
            front-end
          </StyledLink>
          <StyledLink
            link="/tag/frontity/"
            class="tag-cloud-link tag-link-688710702 tag-link-position-70"
            styleclass="font-size: 8pt;"
            aria-label="FRONTITY (عنصر واحد)"
          >
            FRONTITY
          </StyledLink>
          <StyledLink
            link="/tag/functional-programming/"
            class="tag-cloud-link tag-link-116486 tag-link-position-71"
            styleclass="font-size: 8pt;"
            aria-label="functional programming (عنصر واحد)"
          >
            functional programming
          </StyledLink>
          <StyledLink
            link="/tag/gatsby/"
            class="tag-cloud-link tag-link-266151 tag-link-position-72"
            styleclass="font-size: 8pt;"
            aria-label="GATSBY (عنصر واحد)"
          >
            GATSBY
          </StyledLink>
          <StyledLink
            link="/tag/git/"
            class="tag-cloud-link tag-link-209196 tag-link-position-73"
            styleclass="font-size: 16.031007751938pt;"
            aria-label="git (10 عناصر)"
          >
            git
          </StyledLink>
          <StyledLink
            link="/tag/go/"
            class="tag-cloud-link tag-link-2812 tag-link-position-74"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="go (عنصرين)"
          >
            go
          </StyledLink>
          <StyledLink
            link="/tag/golang/"
            class="tag-cloud-link tag-link-27540178 tag-link-position-75"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="GoLang (عنصرين)"
          >
            GoLang
          </StyledLink>
          <StyledLink
            link="/tag/graphql/"
            class="tag-cloud-link tag-link-329863755 tag-link-position-76"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="graphql (4 عناصر)"
          >
            graphql
          </StyledLink>
          <StyledLink
            link="/tag/grunt/"
            class="tag-cloud-link tag-link-1893083 tag-link-position-77"
            styleclass="font-size: 8pt;"
            aria-label="GRUNT (عنصر واحد)"
          >
            GRUNT
          </StyledLink>
          <StyledLink
            link="/tag/gulp/"
            class="tag-cloud-link tag-link-65333 tag-link-position-78"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="GULP (عنصرين)"
          >
            GULP
          </StyledLink>
          <StyledLink
            link="/tag/hacker/"
            class="tag-cloud-link tag-link-6828 tag-link-position-79"
            styleclass="font-size: 8pt;"
            aria-label="HACKER (عنصر واحد)"
          >
            HACKER
          </StyledLink>
          <StyledLink
            link="/tag/haskell/"
            class="tag-cloud-link tag-link-37144 tag-link-position-80"
            styleclass="font-size: 8pt;"
            aria-label="Haskell (عنصر واحد)"
          >
            Haskell
          </StyledLink>
          <StyledLink
            link="/tag/hosting/"
            class="tag-cloud-link tag-link-149 tag-link-position-81"
            styleclass="font-size: 8pt;"
            aria-label="hosting (عنصر واحد)"
          >
            hosting
          </StyledLink>
          <StyledLink
            link="/tag/html/"
            class="tag-cloud-link tag-link-647 tag-link-position-82"
            styleclass="font-size: 18.635658914729pt;"
            aria-label="HTML (18 عنصرًا)"
          >
            HTML
          </StyledLink>
          <StyledLink
            link="/tag/http/"
            class="tag-cloud-link tag-link-10518 tag-link-position-83"
            styleclass="font-size: 8pt;"
            aria-label="HTTP (عنصر واحد)"
          >
            HTTP
          </StyledLink>
          <StyledLink
            link="/tag/information-system/"
            class="tag-cloud-link tag-link-132104 tag-link-position-84"
            styleclass="font-size: 8pt;"
            aria-label="INFORMATION SYSTEM (عنصر واحد)"
          >
            INFORMATION SYSTEM
          </StyledLink>
          <StyledLink
            link="/tag/ionic/"
            class="tag-cloud-link tag-link-41741 tag-link-position-85"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="IONIC (5 عناصر)"
          >
            IONIC
          </StyledLink>
          <StyledLink
            link="/tag/ios/"
            class="tag-cloud-link tag-link-324281 tag-link-position-86"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="ios (3 عناصر)"
          >
            ios
          </StyledLink>
          <StyledLink
            link="/tag/iti/"
            class="tag-cloud-link tag-link-462426 tag-link-position-87"
            styleclass="font-size: 8pt;"
            aria-label="ITI (عنصر واحد)"
          >
            ITI
          </StyledLink>
          <StyledLink
            link="/tag/java/"
            class="tag-cloud-link tag-link-1017 tag-link-position-88"
            styleclass="font-size: 16.031007751938pt;"
            aria-label="Java (10 عناصر)"
          >
            Java
          </StyledLink>
          <StyledLink
            link="/tag/javascript/"
            class="tag-cloud-link tag-link-457 tag-link-position-89"
            styleclass="font-size: 13.968992248062pt;"
            aria-label="Javascript (6 عناصر)"
          >
            Javascript
          </StyledLink>
          <StyledLink
            link="/tag/jquery/"
            class="tag-cloud-link tag-link-203308 tag-link-position-90"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="JQUERY (5 عناصر)"
          >
            JQUERY
          </StyledLink>
          <StyledLink
            link="/tag/js/"
            class="tag-cloud-link tag-link-21291 tag-link-position-91"
            styleclass="font-size: 22pt;"
            aria-label="JS (38 عنصرًا)"
          >
            JS
          </StyledLink>
          <StyledLink
            link="/tag/json/"
            class="tag-cloud-link tag-link-72721 tag-link-position-92"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="JSON (عنصرين)"
          >
            JSON
          </StyledLink>
          <StyledLink
            link="/tag/jwt/"
            class="tag-cloud-link tag-link-859055 tag-link-position-93"
            styleclass="font-size: 8pt;"
            aria-label="JWT (عنصر واحد)"
          >
            JWT
          </StyledLink>
          <StyledLink
            link="/tag/kids/"
            class="tag-cloud-link tag-link-3374 tag-link-position-94"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="kids (3 عناصر)"
          >
            kids
          </StyledLink>
          <StyledLink
            link="/tag/kotlin/"
            class="tag-cloud-link tag-link-33435750 tag-link-position-95"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="kotlin (4 عناصر)"
          >
            kotlin
          </StyledLink>
          <StyledLink
            link="/tag/kubernates/"
            class="tag-cloud-link tag-link-390083858 tag-link-position-96"
            styleclass="font-size: 8pt;"
            aria-label="kubernates (عنصر واحد)"
          >
            kubernates
          </StyledLink>
          <StyledLink
            link="/tag/kubernetes/"
            class="tag-cloud-link tag-link-46713213 tag-link-position-97"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="Kubernetes (عنصرين)"
          >
            Kubernetes
          </StyledLink>
          <StyledLink
            link="/tag/laravel/"
            class="tag-cloud-link tag-link-86504237 tag-link-position-98"
            styleclass="font-size: 18.093023255814pt;"
            aria-label="Laravel (16 عنصرًا)"
          >
            Laravel
          </StyledLink>
          <StyledLink
            link="/tag/linq/"
            class="tag-cloud-link tag-link-114227 tag-link-position-99"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="LINQ (عنصرين)"
          >
            LINQ
          </StyledLink>
          <StyledLink
            link="/tag/linux/"
            class="tag-cloud-link tag-link-610 tag-link-position-100"
            styleclass="font-size: 16.790697674419pt;"
            aria-label="Linux (12 عنصرًا)"
          >
            Linux
          </StyledLink>
          <StyledLink
            link="/tag/localization/"
            class="tag-cloud-link tag-link-37184 tag-link-position-101"
            styleclass="font-size: 8pt;"
            aria-label="localization (عنصر واحد)"
          >
            localization
          </StyledLink>
          <StyledLink
            link="/tag/loopback/"
            class="tag-cloud-link tag-link-1254704 tag-link-position-102"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="LOOPBACK (عنصرين)"
          >
            LOOPBACK
          </StyledLink>
          <StyledLink
            link="/tag/math/"
            class="tag-cloud-link tag-link-2813 tag-link-position-103"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="Math (5 عناصر)"
          >
            Math
          </StyledLink>
          <StyledLink
            link="/tag/mern/"
            class="tag-cloud-link tag-link-10309027 tag-link-position-104"
            styleclass="font-size: 8pt;"
            aria-label="MERN (عنصر واحد)"
          >
            MERN
          </StyledLink>
          <StyledLink
            link="/tag/microservices/"
            class="tag-cloud-link tag-link-17060625 tag-link-position-105"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="Microservices (5 عناصر)"
          >
            Microservices
          </StyledLink>
          <StyledLink
            link="/tag/microsoft/"
            class="tag-cloud-link tag-link-637 tag-link-position-106"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="Microsoft (عنصرين)"
          >
            Microsoft
          </StyledLink>
          <StyledLink
            link="/tag/ml/"
            class="tag-cloud-link tag-link-323487 tag-link-position-107"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="ML (عنصرين)"
          >
            ML
          </StyledLink>
          <StyledLink
            link="/tag/mnogodb/"
            class="tag-cloud-link tag-link-715489943 tag-link-position-108"
            styleclass="font-size: 8pt;"
            aria-label="mnogodb (عنصر واحد)"
          >
            mnogodb
          </StyledLink>
          <StyledLink
            link="/tag/mobile-development/"
            class="tag-cloud-link tag-link-93954 tag-link-position-109"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="Mobile Development (عنصرين)"
          >
            Mobile Development
          </StyledLink>
          <StyledLink
            link="/tag/mongodb/"
            class="tag-cloud-link tag-link-21954763 tag-link-position-110"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="MONGODB (4 عناصر)"
          >
            MONGODB
          </StyledLink>
          <StyledLink
            link="/tag/mvc/"
            class="tag-cloud-link tag-link-36699 tag-link-position-111"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="MVC (4 عناصر)"
          >
            MVC
          </StyledLink>
          <StyledLink
            link="/tag/mysql/"
            class="tag-cloud-link tag-link-4419 tag-link-position-112"
            styleclass="font-size: 16.031007751938pt;"
            aria-label="MYSQL (10 عناصر)"
          >
            MYSQL
          </StyledLink>
          <StyledLink
            link="/tag/network/"
            class="tag-cloud-link tag-link-3385 tag-link-position-113"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="NETWORK (عنصرين)"
          >
            NETWORK
          </StyledLink>
          <StyledLink
            link="/tag/networking/"
            class="tag-cloud-link tag-link-7426 tag-link-position-114"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="Networking (3 عناصر)"
          >
            Networking
          </StyledLink>
          <StyledLink
            link="/tag/next/"
            class="tag-cloud-link tag-link-73693 tag-link-position-115"
            styleclass="font-size: 8pt;"
            aria-label="NEXT (عنصر واحد)"
          >
            NEXT
          </StyledLink>
          <StyledLink
            link="/tag/ngrx/"
            class="tag-cloud-link tag-link-489471262 tag-link-position-116"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="ngrx (عنصرين)"
          >
            ngrx
          </StyledLink>
          <StyledLink
            link="/tag/nodejs/"
            class="tag-cloud-link tag-link-31896918 tag-link-position-117"
            styleclass="font-size: 18.852713178295pt;"
            aria-label="NODEJS (19 عنصرًا)"
          >
            NODEJS
          </StyledLink>
          <StyledLink
            link="/tag/nuxtjs/"
            class="tag-cloud-link tag-link-669173348 tag-link-position-118"
            styleclass="font-size: 8pt;"
            aria-label="nuxtjs (عنصر واحد)"
          >
            nuxtjs
          </StyledLink>
          <StyledLink
            link="/tag/oop/"
            class="tag-cloud-link tag-link-4826 tag-link-position-119"
            styleclass="font-size: 14.511627906977pt;"
            aria-label="OOP (7 عناصر)"
          >
            OOP
          </StyledLink>
          <StyledLink
            link="/tag/operating-systems/"
            class="tag-cloud-link tag-link-3015 tag-link-position-120"
            styleclass="font-size: 8pt;"
            aria-label="Operating systems (عنصر واحد)"
          >
            Operating systems
          </StyledLink>
          <StyledLink
            link="/tag/optimization/"
            class="tag-cloud-link tag-link-133147 tag-link-position-121"
            styleclass="font-size: 8pt;"
            aria-label="optimization (عنصر واحد)"
          >
            optimization
          </StyledLink>
          <StyledLink
            link="/tag/oracel/"
            class="tag-cloud-link tag-link-19617860 tag-link-position-122"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="ORACEL (عنصرين)"
          >
            ORACEL
          </StyledLink>
          <StyledLink
            link="/tag/oracle/"
            class="tag-cloud-link tag-link-3766 tag-link-position-123"
            styleclass="font-size: 8pt;"
            aria-label="ORACLE (عنصر واحد)"
          >
            ORACLE
          </StyledLink>
          <StyledLink
            link="/tag/os/"
            class="tag-cloud-link tag-link-3383 tag-link-position-124"
            styleclass="font-size: 8pt;"
            aria-label="os (عنصر واحد)"
          >
            os
          </StyledLink>
          <StyledLink
            link="/tag/pdo/"
            class="tag-cloud-link tag-link-956373 tag-link-position-125"
            styleclass="font-size: 8pt;"
            aria-label="PDO (عنصر واحد)"
          >
            PDO
          </StyledLink>
          <StyledLink
            link="/tag/perl/"
            class="tag-cloud-link tag-link-5226 tag-link-position-126"
            styleclass="font-size: 8pt;"
            aria-label="PERL (عنصر واحد)"
          >
            PERL
          </StyledLink>
          <StyledLink
            link="/tag/php/"
            class="tag-cloud-link tag-link-458 tag-link-position-127"
            styleclass="font-size: 20.263565891473pt;"
            aria-label="PHP (26 عنصرًا)"
          >
            PHP
          </StyledLink>
          <StyledLink
            link="/tag/pocasts/"
            class="tag-cloud-link tag-link-213707 tag-link-position-128"
            styleclass="font-size: 8pt;"
            aria-label="pocasts (عنصر واحد)"
          >
            pocasts
          </StyledLink>
          <StyledLink
            link="/tag/podcast/"
            class="tag-cloud-link tag-link-1142 tag-link-position-129"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="Podcast (3 عناصر)"
          >
            Podcast
          </StyledLink>
          <StyledLink
            link="/tag/postmanmapi/"
            class="tag-cloud-link tag-link-715489944 tag-link-position-130"
            styleclass="font-size: 8pt;"
            aria-label="postmanmapi (عنصر واحد)"
          >
            postmanmapi
          </StyledLink>
          <StyledLink
            link="/tag/problem-solving/"
            class="tag-cloud-link tag-link-133044 tag-link-position-131"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="problem solving (عنصرين)"
          >
            problem solving
          </StyledLink>
          <StyledLink
            link="/tag/project-management/"
            class="tag-cloud-link tag-link-510 tag-link-position-132"
            styleclass="font-size: 8pt;"
            aria-label="project management (عنصر واحد)"
          >
            project management
          </StyledLink>
          <StyledLink
            link="/tag/pwa/"
            class="tag-cloud-link tag-link-1570269 tag-link-position-133"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="PWA (عنصرين)"
          >
            PWA
          </StyledLink>
          <StyledLink
            link="/tag/pwd/"
            class="tag-cloud-link tag-link-391477 tag-link-position-134"
            styleclass="font-size: 8pt;"
            aria-label="PWD (عنصر واحد)"
          >
            PWD
          </StyledLink>
          <StyledLink
            link="/tag/python/"
            class="tag-cloud-link tag-link-832 tag-link-position-135"
            styleclass="font-size: 20.263565891473pt;"
            aria-label="Python (26 عنصرًا)"
          >
            Python
          </StyledLink>
          <StyledLink
            link="/tag/pytyon/"
            class="tag-cloud-link tag-link-704066662 tag-link-position-136"
            styleclass="font-size: 8pt;"
            aria-label="pytyon (عنصر واحد)"
          >
            pytyon
          </StyledLink>
          <StyledLink
            link="/tag/r/"
            class="tag-cloud-link tag-link-10189 tag-link-position-137"
            styleclass="font-size: 8pt;"
            aria-label="R (عنصر واحد)"
          >
            R
          </StyledLink>
          <StyledLink
            link="/tag/reacr/"
            class="tag-cloud-link tag-link-592504606 tag-link-position-138"
            styleclass="font-size: 8pt;"
            aria-label="reacr (عنصر واحد)"
          >
            reacr
          </StyledLink>
          <StyledLink
            link="/tag/react/"
            class="tag-cloud-link tag-link-96530 tag-link-position-139"
            styleclass="font-size: 19.286821705426pt;"
            aria-label="React (21 عنصرًا)"
          >
            React
          </StyledLink>
          <StyledLink
            link="/tag/react-native/"
            class="tag-cloud-link tag-link-324166710 tag-link-position-140"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="REACT NATIVE (4 عناصر)"
          >
            REACT NATIVE
          </StyledLink>
          <StyledLink
            link="/tag/redux/"
            class="tag-cloud-link tag-link-299360 tag-link-position-141"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="Redux (4 عناصر)"
          >
            Redux
          </StyledLink>
          <StyledLink
            link="/tag/ring/"
            class="tag-cloud-link tag-link-35689 tag-link-position-142"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="RING (عنصرين)"
          >
            RING
          </StyledLink>
          <StyledLink
            link="/tag/ruby/"
            class="tag-cloud-link tag-link-4872 tag-link-position-143"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="RUBY (3 عناصر)"
          >
            RUBY
          </StyledLink>
          <StyledLink
            link="/tag/rx/"
            class="tag-cloud-link tag-link-108740 tag-link-position-144"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="rx (عنصرين)"
          >
            rx
          </StyledLink>
          <StyledLink
            link="/tag/rxjava/"
            class="tag-cloud-link tag-link-194297537 tag-link-position-145"
            styleclass="font-size: 8pt;"
            aria-label="rxjava (عنصر واحد)"
          >
            rxjava
          </StyledLink>
          <StyledLink
            link="/tag/rxjs/"
            class="tag-cloud-link tag-link-42623651 tag-link-position-146"
            styleclass="font-size: 8pt;"
            aria-label="rxjs (عنصر واحد)"
          >
            rxjs
          </StyledLink>
          <StyledLink
            link="/tag/sap/"
            class="tag-cloud-link tag-link-31099 tag-link-position-147"
            styleclass="font-size: 8pt;"
            aria-label="SAP (عنصر واحد)"
          >
            SAP
          </StyledLink>
          <StyledLink
            link="/tag/sass/"
            class="tag-cloud-link tag-link-34613 tag-link-position-148"
            styleclass="font-size: 8pt;"
            aria-label="SASS (عنصر واحد)"
          >
            SASS
          </StyledLink>
          <StyledLink
            link="/tag/scripting/"
            class="tag-cloud-link tag-link-2929 tag-link-position-149"
            styleclass="font-size: 8pt;"
            aria-label="scripting (عنصر واحد)"
          >
            scripting
          </StyledLink>
          <StyledLink
            link="/tag/scrum/"
            class="tag-cloud-link tag-link-46805 tag-link-position-150"
            styleclass="font-size: 8pt;"
            aria-label="SCRUM (عنصر واحد)"
          >
            SCRUM
          </StyledLink>
          <StyledLink
            link="/tag/security/"
            class="tag-cloud-link tag-link-801 tag-link-position-151"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="SECURITY (عنصرين)"
          >
            SECURITY
          </StyledLink>
          <StyledLink
            link="/tag/seo/"
            class="tag-cloud-link tag-link-1958 tag-link-position-152"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="seo (عنصرين)"
          >
            seo
          </StyledLink>
          <StyledLink
            link="/tag/serverless/"
            class="tag-cloud-link tag-link-2092318 tag-link-position-153"
            styleclass="font-size: 8pt;"
            aria-label="Serverless (عنصر واحد)"
          >
            Serverless
          </StyledLink>
          <StyledLink
            link="/tag/sharepoint/"
            class="tag-cloud-link tag-link-37382 tag-link-position-154"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="sharepoint (3 عناصر)"
          >
            sharepoint
          </StyledLink>
          <StyledLink
            link="/tag/software-architecture/"
            class="tag-cloud-link tag-link-11412 tag-link-position-155"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="Software architecture (9 عناصر)"
          >
            Software architecture
          </StyledLink>
          <StyledLink
            link="/tag/software-development/"
            class="tag-cloud-link tag-link-2301 tag-link-position-156"
            styleclass="font-size: 15.054263565891pt;"
            aria-label="Software development (8 عناصر)"
          >
            Software development
          </StyledLink>
          <StyledLink
            link="/tag/software-engineering/"
            class="tag-cloud-link tag-link-11176 tag-link-position-157"
            styleclass="font-size: 15.054263565891pt;"
            aria-label="Software engineering (8 عناصر)"
          >
            Software engineering
          </StyledLink>
          <StyledLink
            link="/tag/solid/"
            class="tag-cloud-link tag-link-107226 tag-link-position-158"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="SOLID (عنصرين)"
          >
            SOLID
          </StyledLink>
          <StyledLink
            link="/tag/springboot/"
            class="tag-cloud-link tag-link-221019527 tag-link-position-159"
            styleclass="font-size: 8pt;"
            aria-label="springboot (عنصر واحد)"
          >
            springboot
          </StyledLink>
          <StyledLink
            link="/tag/sql/"
            class="tag-cloud-link tag-link-10346 tag-link-position-160"
            styleclass="font-size: 17.550387596899pt;"
            aria-label="SQL (14 عنصرًا)"
          >
            SQL
          </StyledLink>
          <StyledLink
            link="/tag/sql-server/"
            class="tag-cloud-link tag-link-6407 tag-link-position-161"
            styleclass="font-size: 8pt;"
            aria-label="sql server (عنصر واحد)"
          >
            sql server
          </StyledLink>
          <StyledLink
            link="/tag/srping-boot/"
            class="tag-cloud-link tag-link-715489945 tag-link-position-162"
            styleclass="font-size: 8pt;"
            aria-label="SRPING BOOT (عنصر واحد)"
          >
            SRPING BOOT
          </StyledLink>
          <StyledLink
            link="/tag/swift/"
            class="tag-cloud-link tag-link-596263 tag-link-position-163"
            styleclass="font-size: 8pt;"
            aria-label="Swift (عنصر واحد)"
          >
            Swift
          </StyledLink>
          <StyledLink
            link="/tag/symfony/"
            class="tag-cloud-link tag-link-45569 tag-link-position-164"
            styleclass="font-size: 8pt;"
            aria-label="SYMFONY (عنصر واحد)"
          >
            SYMFONY
          </StyledLink>
          <StyledLink
            link="/tag/system-design/"
            class="tag-cloud-link tag-link-322320 tag-link-position-165"
            styleclass="font-size: 8pt;"
            aria-label="system design (عنصر واحد)"
          >
            system design
          </StyledLink>
          <StyledLink
            link="/tag/tailind/"
            class="tag-cloud-link tag-link-715489946 tag-link-position-166"
            styleclass="font-size: 8pt;"
            aria-label="TAILIND (عنصر واحد)"
          >
            TAILIND
          </StyledLink>
          <StyledLink
            link="/tag/tailwindcss/"
            class="tag-cloud-link tag-link-688808090 tag-link-position-167"
            styleclass="font-size: 8pt;"
            aria-label="TAILWINDCSS (عنصر واحد)"
          >
            TAILWINDCSS
          </StyledLink>
          <StyledLink
            link="/tag/talks/"
            class="tag-cloud-link tag-link-42375 tag-link-position-168"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="Talks (9 عناصر)"
          >
            Talks
          </StyledLink>
          <StyledLink
            link="/tag/tdd/"
            class="tag-cloud-link tag-link-76604 tag-link-position-169"
            styleclass="font-size: 8pt;"
            aria-label="TDD (عنصر واحد)"
          >
            TDD
          </StyledLink>
          <StyledLink
            link="/tag/testing/"
            class="tag-cloud-link tag-link-12 tag-link-position-170"
            styleclass="font-size: 15.596899224806pt;"
            aria-label="Testing (9 عناصر)"
          >
            Testing
          </StyledLink>
          <StyledLink
            link="/tag/tips/"
            class="tag-cloud-link tag-link-1788 tag-link-position-171"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="tips (4 عناصر)"
          >
            tips
          </StyledLink>
          <StyledLink
            link="/tag/translation/"
            class="tag-cloud-link tag-link-8349 tag-link-position-172"
            styleclass="font-size: 8pt;"
            aria-label="translation (عنصر واحد)"
          >
            translation
          </StyledLink>
          <StyledLink
            link="/tag/typescript/"
            class="tag-cloud-link tag-link-25138290 tag-link-position-173"
            styleclass="font-size: 9.953488372093pt;"
            aria-label="typescript (عنصرين)"
          >
            typescript
          </StyledLink>
          <StyledLink
            link="/tag/ui/"
            class="tag-cloud-link tag-link-27940 tag-link-position-174"
            styleclass="font-size: 11.255813953488pt;"
            aria-label="ui (3 عناصر)"
          >
            ui
          </StyledLink>
          <StyledLink
            link="/tag/unit-testing/"
            class="tag-cloud-link tag-link-3882 tag-link-position-175"
            styleclass="font-size: 12.341085271318pt;"
            aria-label="UNIT TESTING (4 عناصر)"
          >
            UNIT TESTING
          </StyledLink>
          <StyledLink
            link="/tag/ux/"
            class="tag-cloud-link tag-link-81969 tag-link-position-176"
            styleclass="font-size: 8pt;"
            aria-label="ux (عنصر واحد)"
          >
            ux
          </StyledLink>
          <StyledLink
            link="/tag/vim/"
            class="tag-cloud-link tag-link-18060 tag-link-position-177"
            styleclass="font-size: 8pt;"
            aria-label="vim (عنصر واحد)"
          >
            vim
          </StyledLink>
          <StyledLink
            link="/tag/vmware/"
            class="tag-cloud-link tag-link-38600 tag-link-position-178"
            styleclass="font-size: 8pt;"
            aria-label="vmware (عنصر واحد)"
          >
            vmware
          </StyledLink>
          <StyledLink
            link="/tag/vue/"
            class="tag-cloud-link tag-link-294760 tag-link-position-179"
            styleclass="font-size: 8pt;"
            aria-label="VUE (عنصر واحد)"
          >
            VUE
          </StyledLink>
          <StyledLink
            link="/tag/vuejs/"
            class="tag-cloud-link tag-link-249033155 tag-link-position-180"
            styleclass="font-size: 13.209302325581pt;"
            aria-label="VUEJS (5 عناصر)"
          >
            VUEJS
          </StyledLink>
          <StyledLink
            link="/tag/web-design/"
            class="tag-cloud-link tag-link-168 tag-link-position-181"
            styleclass="font-size: 8pt;"
            aria-label="Web Design (عنصر واحد)"
          >
            Web Design
          </StyledLink>
          <StyledLink
            link="/tag/web-development/"
            class="tag-cloud-link tag-link-2260 tag-link-position-182"
            styleclass="font-size: 8pt;"
            aria-label="web development (عنصر واحد)"
          >
            web development
          </StyledLink>
          <StyledLink
            link="/tag/webpack/"
            class="tag-cloud-link tag-link-26656049 tag-link-position-183"
            styleclass="font-size: 8pt;"
            aria-label="WEBPACK (عنصر واحد)"
          >
            WEBPACK
          </StyledLink>
          <StyledLink
            link="/tag/web-servers/"
            class="tag-cloud-link tag-link-79602 tag-link-position-184"
            styleclass="font-size: 8pt;"
            aria-label="WEB SERVERS (عنصر واحد)"
          >
            WEB SERVERS
          </StyledLink>
          <StyledLink
            link="/tag/websockets/"
            class="tag-cloud-link tag-link-12378292 tag-link-position-185"
            styleclass="font-size: 8pt;"
            aria-label="WEBSOCKETS (عنصر واحد)"
          >
            WEBSOCKETS
          </StyledLink>
          <StyledLink
            link="/tag/herokuapp/"
            class="tag-cloud-link tag-link-33 tag-link-position-186"
            styleclass="font-size: 14.511627906977pt;"
            aria-label="WORDPRESS (7 عناصر)"
          >
            WORDPRESS
          </StyledLink>
          <StyledLink
            link="/tag/zend/"
            class="tag-cloud-link tag-link-83414 tag-link-position-187"
            styleclass="font-size: 8pt;"
            aria-label="ZEND (عنصر واحد)"
          >
            ZEND
          </StyledLink>
        </div>
      </FooterSectionItem>

      <FooterSectionItem borderColor="youtube.400">
        <SocialMenu
          ml="0"
          justifyContent="center"
          menu={state.theme.socialLinks}
        />
      </FooterSectionItem>

      <FooterSectionItem fontWeight="bold" fontFamily="heading">
        Made with a{" "}
        <StyledLink target="_blank" link="https:/frontity.org/">
          Frontity
        </StyledLink>
      </FooterSectionItem>
    </FooterSection>
  );
};
export default connect(Footer);
