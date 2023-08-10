{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .AppleSystemUIFontMonospaced-Regular;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue35;\red255\green255\blue255;\red109\green109\blue109;
}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18431;\cssrgb\c100000\c100000\c100000;\cssrgb\c50196\c50196\c50196;
}
\paperw12240\paperh20160\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrt\brdrnil \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clmrg \clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var aws = require('aws-sdk')\cell 
\pard\intbl\itap1\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 var ddb = new aws.DynamoDB()\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 exports.handler = async (event, context) => \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     let date = new Date()\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     if (event.request.userAttributes.sub) \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         let params = \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             Item: \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 'id': \{S: event.request.userAttributes.sub\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 '__typename': \{S: 'User'\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 'username': \{S: event.userName\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 'email': \{S: event.request.userAttributes.email\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 'createdAt': \{S: date.toISOString()\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 'updatedAt': \{S: date.toISOString()\},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             \},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             TableName: process.env.USERTABLE\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         try \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             await ddb.putItem(params).promise()\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             console.log("Success")\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         \} catch (err) \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             console.log("Error", err)\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         console.log("Success: Everything executed correctly")\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         context.done(null, event)\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     \} else \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         console.log("Error: Nothing was written to DynamoDB")\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         context.done(null, event)\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \};\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 /*\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 GraphQL Schema\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 type User @model\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2   @auth(rules: [\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     \{ allow: groups, groups: ["Admin"] \},\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     \{ allow: owner, ownerField: "username", operations: [read] \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2   ]) \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2   id: ID!\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2   username: String!\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2   email: String! \cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 */\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\cell
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \
\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 /*\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 IAM permissions\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     "Version": "2012-10-17",\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     "Statement": [\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         \{\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             "Effect": "Allow",\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             "Action": [\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2                 "dynamodb:PutItem"\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             ],\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2             "Resource": "arn:aws:dynamodb:region:id:table/name-env"\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2         \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2     ]\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 \}\cell \row

\itap1\trowd \taflags1 \trgaph108\trleft-108 \trcbpat3 \trbrdrl\brdrnil \trbrdrt\brdrnil \trbrdrr\brdrnil 
\clvertalt \clshdrawnil \clwWidth4554\clftsWidth3 \clminw1000 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx4320
\clvertalt \clshdrawnil \clwWidth10340\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl200 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\sl400\qr\partightenfactor0
\cf2 \cell 
\pard\intbl\itap1\pardeftab720\sl400\partightenfactor0
\cf2 */\cell \lastrow\row
}