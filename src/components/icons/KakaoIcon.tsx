import React from 'react'

const KakaoIcon = () => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 62 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g filter="url(#filter0_d_1_355)">
        <rect
          x="5"
          y="1"
          width="54"
          height="54"
          fill="url(#pattern0_1_355)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_355"
          x="-2"
          y="0"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset
            dx="-2"
            dy="4"
          />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.666829 0 0 0 0 0.666829 0 0 0 0 0.666829 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_355"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_355"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_1_355"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use
            xlinkHref="#image0_1_355"
            transform="translate(0 -0.00276243) scale(0.00552486)"
          />
        </pattern>
        <image
          id="image0_1_355"
          width="181"
          height="182"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC2CAYAAACfx8wHAAAACXBIWXMAAAsTAAALEwEAmpwYAAArvUlEQVR4nO2deZgkVZW333NvRG61V+9703TT7IuIKCo7KiooCqKiiAuKoMPoOK7zzaIz6nx+7s4ICui4Is6Io84mg6CoCAjDsHRDNw29b9W1V1YuEfee74/I6m56o5fqqsiqfJ8nn4aszBs3I35x4tx7zz1HVC/j8BGC9sFTm4ECBBF9uaMx0VRay/8B2aNxlSE0UyWIweGgNYcdjhiKlMAKOY3xTTlENgIKQ9OIMxbVHjIdLejQOfiBOzGBA82ABoiJKGYyBL/dTLZg0QtmwWqHZh2Kx4jCoEFDAzmg6tFsL5I1SLkVMn2grXh1SMmCyUFhkNhtxZcWkgvBxx6aAuu9TJfhymxDps0HOsUGcad66cTTrhCKkFElC2QBj1ARqKBEQAWhW/F9QqZbPD2xq/ZKc3a98b43HnQEWUsUDWHyXViOwFeVOIZMcwkpFNGqxQ1OxxSej7H34Cvg1GBLgnEOmoRYHK5oyYigBfD5HmxPJ7EoklEMIRTKiCshbhFkFqLuh0juRKJyDhleRdBpcMPzkHgItTFUA4y30NKLhg7dMhUJKngjBM3rUG1D4tkMl4/F8TAtbRYd7KNihez8hUigyfU8DASHpdW6RgEPUjvpCogHH8w1tC4Ry7Ggx2BlHlU338BMMnaGmljEgY8FREAUAVRJ/q21LgoqJG8m7wAGJUYDMMZGRPFGVDeZDOsQXW1ssFy0ZRnCSqBHtdaQcSBmbE9PHdAQNdQU58AoqAUJ2ontKYK8kMC+QKw7RuPMIqtTQ0yMH/me36kNxw6hqu5olmfbI931jZ3/JwZEQxwLFBYYwwtVPdZmwE8DcQNidVWA/C9xeB9R/o+oewSoIoXa8Q+P9asnJq+oR55+qmA1I5p/EZE9D8yZWm0/CU+7YFAD6hPrrep3srC7sLf3D4Rd2qjdG6gqaAxCK8Ip1uopGodX6WAGjNsgQXQ/8Yo7Eb0LNcuU2uNgkup78ol65EJbphHwCjH6CrVytrjW2VoBNTE4A6K7W9XREO7Bsv0pUOuS+OQ/nMwR4y4hWn6JdwVEzKNW/N0E8nPgv1E0caUmDxNb1DurUgWEJlEuUjGXSDMXor5Fay604mrOr1A3IhhxN1RACsnvEH+CQU7QjL7fZ8zTRvk5mNtRfr3jBq2T33eQTFhRK6Cxg4oBwxkE7g0Il2Nk5nZrN9Gubc2aK5r4+8IiD9cbDa43BX0cLz/C6/cRnsYDE3SMOTF/loIpxnl7fMc7Obrtd3RFv9PQX4/XmXscvU1URsYNXhHhOAI+ibDSVNpvw8qr1OiEPA8TyFInV1BhNsa8IxfItTKjMMsDDMUQjKdDPM5IbdCZjDyNVDOXac5dFqi9X9XdAHwX0bhu3K7noL4ttQhIpnax7AKM+RJWVynyKQyztOyg7Ca3oPeAiqtNxesLjJhbBH0SZ/8UZzLJOQ2pZxNep6KuDeakCjo0WwxfQDIrFHM9qrntj90G+2TEeCt+EeXgi1rNPanGX4cfAuPrZ8C8C/UpauNQzWfp17/R0gMrJMh8QJXM9ondBgeOKkhmoVZ7vubLj64gnvk21IIx1JuFqCNRK4hDUazXd4RxYaUONf8lvtLU0PIoMDI96D2oX6KVKd9mOP6NRMUzEQOy85JpuqkPUY+c8Dj/Eoz9vVTMzaI6T60DmUBj3TQgSSwKxuOrpZeaqPRrExS+pT4/LQlcGe8OPjfpF3WyOBJSmfJ5Sp334HmRiqL1cHbrGk2CpUTA565iqOUJiUvvqIdBd2pFvX2sJ3Ih5XiZRrkPqjZGgOODos51iotvFvH/hsri8e7RvkilqBWweCx8CWP+Ha+LIa7b0fiEQGoxUhGvFG+WieVdmtLBTPpELYKKeX7ByiOhcr33z/2VBmOMEgr6TTHm+4g2p20QmSpRKyDl6HpR/4CqnNDwm9OLelDr3kxUWE655WwkGu8ubSdVojbGfJuK+5LGviHntCMADq1m5lLJ3yUZf/14d2mE8Re1gqgeqYaHgLcly7TpeZQ12BdSi+t2ENgvSWi+XQvyHtdejaOoFcQiVs4Vcf+rqqc0zHOdIoBXVMzbJMg8gAbTx9PPHj9Rq0W1/+1i4ztxpmnc+tFg9FBFVJ+v0ZyH1TedCOPjZ4+xqD1eMqgUwPBX6oZvUR+RppFzg0PFoXFmFtXCHzH6CqRQ2z4/doyxqLMErgvrn/4atumvUUtD0BMNSeJE1Ieo/w+Nn3qjUmUsr/OYBk4oOVqjrm+p23CVp4XxHlA0OLz4KCZnV/6QQqEJpzeP1XHHRtRK8kww8Q99HL4RDWpRXw0mNoIJmhAvN2nkChj56lgcNQB7GJodidGQ5Kkjilf7Qxxv3J6yqMGkQAGNFNCviNVYvXw9mbKt6eMweMDB4XOr4+QfFTTIfotY3ohvCHpSMrJQ4zL/GBg7jPH/tEMIo68/0RvaR7fFCAhy6Nknop0gZfcPGsXXju5BGtQlCsYaXCCXo9nbrOuHBctGXdcBj/eNbosREICeeDTarH8rFX9tsiWowaRHwHuPlPyP1NltVId/BX2jfpjgsAwV8wZpMlcR8gmtHIb2G9Q31iBif4m1R2N4arSbF101ug1qzyy0uOBsmZe9S0XAN9a+G+wBNUgQbSIsHSXTnhwiMzRqTctox3l7d8xC3XT8UxJttaQrzLZBqtAkQX6l/Y+y8J7TaOoatZZFnzlrdFoKKslu7yi7SuNwEdKI7m+wPxiwlVskU3ynEKAuPOQWRQdnjELHgN4j8UNT/pmw+HokpmGiG+wfivgMPs5drVNW3RS0HLrFDmjeMgodAy3O/CDS9vq0be1pkHYENRGQ+yZh8X6X2/bIocY/ia448+C/7QGraCgnqTMPNzIkNThYkn0hsqlYqs7xsVNjDl7ZAc8cwpxeBNqh6Bz5BdrwoRscPKqKiJ2Vz2S+I8XiW433B70DKqDpIAOLvEIG6JRvAXMPrpEGDUYQVB0ma95CU+Z23xv/RA8yLung3I9aGTYNzCsV82+NuegGo4kxUi1VZWac8b1yEGM00V+fcYCHVIhBW0LLTLNNI21v7C1sMKp4A4X4F0yNLhIXHnASo4DWg1CkV3yL3ihO2huDwwajjvFQ9a+WtR0XCy0/w7oDyjYnQ09ecEDHUzXkQn96YKp/8I3p6AaHCwUTSF8llpm+rBVr9l/XwQHNfaigEiNE31MvDUHvwvaUJQawkvz7rJLN7Ng/4UgG276Wzb/xwHs2AqrabiP/+WpF31exguynrEUfv3T/j+IF8n3XqB3+urrDsWOmPhBAQoGcQF4gK8kGohiIFSoKZYUqRLEykg9QJEnMHwSSzBzlBDICYe37TqECDCdtaKSJ2Cer8VAwVunRzKJ+zT0T7mfohfgNr9iPT5FYlUqcV427gfwhdbae0JoFzgm0GihIIr4+ZWCLY+PmmPWbPJs2O7q6PV09jqFBZWjYUxxWqlXF+R3tWCNks9BUEJqaDC0twvROy5QphtkzLHNnW+bMsjRNt8nxLFBUGPBoZRKKXBTU3h1Hcg6hrRVw3fdXAnrXPHfDCliLNHd8TiObn/DPSq2VOmk10GGSldNNMcvvr/D4ExFPrIhY9UzM+g2Ord2OwQGlXEnOiTFgrRAEyb/G7LSGUHMzvIfYKXEM3tcsuUAuK7S1GmZMM8ydE7D4iICjl4YcuzTgqMUhMj9I2ur1MOi3f29Co4KEcnYwPHSBrN58x/7E/4vetB/rJiXQWeEsPX3hRqoT1AGsbZ+UFoFpFiLoWxlx/4NV7nuwysOPVln5dExPjyN2kM8JTQUhlxPCQA55c8+IXx1FSqmsFIeTGyW0MHWqZfGRAaccn+H052d4wakZWo4MEr+9y6FDtfywE1Xg2QAzNLyCe3uWEmfA7tsNkeGHz33ONsVbsi18R4PKW3ET7Mx5MAEw3UKTUH465tf3lLnz1xXuf7DK08/EVCOltcXQ1ipkMmP7+1WhWlX6BzwDQ0ouKyxeFHD6aRnOOzPHmS/JEi4IYdBDl8M70pD2c3RRhQBEpl0itvmnmH1P8Unfoy/bZ3veC0Emmt+cj9cQyVhnkDp8eDAZYHYAHlY+UOH2fytxx3+XWL48wnmYOsXQ0mIwko6Hk0jiugwMerq6PZkQjjs2w8svyHHJK/MsPC2bzKpsivERE0rcgkLgnxkshYu8l32GhUj0xL6WyRVVQ5ixt6q4yydEzJIHEwJzA6gqf7izzA9vK3Lnr8ps3eqZMsXQ2WmQlAh5bxgB56G7x9PT45k9y3L+BTmuuKyJ552TTe6ADTE+ZsKI2xihOBhdXhqu3ravKD6JV56+1z8qiiCzjc1uUF9/RSKfhdau7RwLoXDff5a46dtD3HlnmeGSMnu2pakg1Fs5jpG58aGisnGjo6VZeNnL81x9VROnnJeHsqKb3ITwuUUExK2IKtFSsw9TLaW9WmpFxRAG5ksWf32ardZz4sB0Gphqefq+Ml/62iA//3mJclWZN9eSzdSfmPeEMVCuKOvWO5rzwmsvKfAn17Yw/9QsbHX4Pn94EnKNFQrGCgjnxVX3q735IBI9szefWsBFTUbibaKSq0tNezAWOCKArY4vfHWQm28eoqvbs2CBJZ+VZA55gmENDJeVNWscs2carn53C++7rgXaDTwTJ0GVdWq1RQSv+htno7NkL1NOov3v3tPbQAjD6z7kB7Z8Dps9rB09LDgwHQamWe79xTCf+mQf9/6xyry5Ae1tgpsE+Smthd4+z4YNjpeekeUv/6qdUy/Iw5YY36/1abU1GTRKZ+5EwvBR1O92g0q06qV7/qYBQ7BGYp1fVzMeSYVczAILFfjcZ/r5ylcHECssmGcnXZzFyBN69VpHIPDBD7TyJx9uBQN+natPYQNizU0S2Kv3+DfdfMru7xoPlexZvly4u64KcmoyK8CRAV3LIt7//h7+61dljlgY0Nw8Oazz3rAWBgaUNetiLnpFnq9+pZO2xQH6VFyXg0gRhisqU7xS3rXrosMz9/AN0O6FP9Zi86XY9NTH2yceTFZgvuW+fytx7bU9rN/qWLIoWVedTNZ5b4xMU65cFbN4fsDXb+zkpHPzsDqqu3lt8Y44l327Czq+vWv0nrind935oohIJxp2qcPUxR3swDQLzA64/RuD/Omf9WAzwrw5ljge786lj8DC6nWOAPjaVzq58MpmWB/jS1o/wlaQ0D7gm7tekKRY2IERbebZr1ZwhTeo1/oRdKvAbMtNf9fH1dd109xqmDe7Iei9ETtYON8S5oWrru7me18YgLkW0yRJ8FZdIGjsTvOVyiI/pOz8Mt6VeNZLS2CjN9XFergH0yIw0/IPf9HHn/+fPubOCZjSaYgnsf+8P8QxTJ9qmDHDcP2f93DLp/thdoAp1ImwJcnFZ4dnvjEIAsIwJAySl1Q375j9UEBiZgYlu0nTPkD0YPICcwNu/KtePvKpfhYtDOpyVXA8sQYGh5Q162O+/OkO3vrhNlgb4ce2oNbB4QMkV/pfwrUn4932qZ4g3GlZRQEtmctSH4iuIAEw1/KjL/bz0b/tZ9GChqAPBuehuVmYNyfgA3/RR0e74dXvbkGejpL8RGnWgY3QSvYkHVqyVODJkbdNZTNUNkN5E1Q3gxTltdh0W2lRkCNCfnfbMH/ysT7mzQlobmoI+mDxHtpahRnTDO/5YC8P/WIYWRSk3w1RQYxH8vK6KGeJay8ZfvhVOz4QVFszTeWteEnvEmIMZpFl/cMR51+0Fe9h5gwzqeegR4vAwrqNjpYmw53/Pp2pSwL8mnQv0EiydfauKKqea0geLaKbTxj5M0RNr9FK4aeqcTofOx7MFIM65aKLunjosSpLFgWNWY5RJAjgiZUx57woy623T4MqSSBUWqf6FES0Ks1mOoHtRxXjMn24TB8u7MVL+UJ1Jp2CBiQEOg2f+et+fnt/hSMXNgQ92sQxLFkU8B93l/nqpwdgmkVSbKkRUK8ZldwFapvRoAlxyy/c8YGguhJTXYym8LZ0YI4KuP+fh7norduYP8eSzUpjpfAwIALDw8qWbZ7/unUqx1+Yxz8Vp9cNMSCR3kik1yCCqYS9lIMeorB/vli3GJ9CQWsSD+03Oj7xmX7yOSGfbwj6cKGazIiIwCc+0w+9HtMm6d0j4oHQnK45g2YFE7g8oWvCknlBWnstAFMtN90wyAMPV5k3xzYGhocZ52DhPMuv763w/W8OwowgvbFtCqAnYJiKUUxoAkITEGDO0DTWDVeQGZbuhyr84z8VmTfbNiz0GDJrhuUrtxQpPlFFph1AQruxJElwY73XF0UejIZlNFNCJX5RGpfGRYBm4Rv/VGTdRkdHu2mIeoxQhWmdhhWrIr71nSK0pzccSABVOSOOBENVIJa8ihw33h3bDQWZZtj2YJXbfjbMnNkNt2Os8QpzZlm+/5Nhhh6PkCkpHHNRKz9k5YS8yWJ8LKiTJQIt492xXRGAVsttPx1m7fqYtpa02omJiyp0tBtWror5l58NQ4dJZ4lMFURlqWnqwkhLDnLhseo1df6SNBvcMxH/+ssSUztto1bSOKEKbW3Cv/5nGTY6pCmFxiVJibwoLgzMMlopg4tOgJTlm1ZgmuE391R4bFnElE6Ttntu0qAK06daHnqkyv2/qyS5BtN2MYwieOO7jzjOGKuIctR492lXjAFiuOM3ZZzjkBMwNjg0rIXhkvLLe8rAQVeDO6xoxpMZkqMMbU0gzE/dnddsKK2KuO+hamKl09a/ScaIb33fg1XcuhgppFDVTtCsW2j0NyssyhyClJnCduHhxyOeWRPT2pKyvk1S2luTAeOyZRG0pfCaRAZtieYb35ybhTAjTaZQAKzw8GNVisOKTWvMwSQjDKGv3/M/j0VJaY+0ISBe5hp70uy5eAJcikQdAIOe5StiMplGjEdaUE1862UrIihp+sY54tFY5hmVqEPTtpKYFeIuz+p1Mc1p9N0mMYWC4em1Drp9UoQpTSiISKvxfX6KmJSZwpxh4xbHlq2OfBofc5OYfE7YstXR0+XS54KIoKqtxopMSV3aqSxs6fL0DyphmKaONchmoK/fsWWbS0rtpQ4xBqFjvLuxGxZ6+xzVagr9tkmOtcJwSenp8+xPpawxpZYFwaC0j3dfdsMIvf2eKErnJP9kRgSiCPoHRrJxpggBUcUAmdQtvADlCnjVhqhThtRqzZTLKYy9JzHWiajThiZFMxukE9VkZ0waRQ1gVDWVOT5Ser4a1EjtE7SWuDV9ohYIM4I0pJ1KjCSri2l0WyGtKUo8tDYbgiDZedEgPXifCLq52aT24higPN6d2A2vdLYbwlAaGwNShlclmxE6201SXTdlCGAEqY53R3YjhilTDM1NQhyn0xpMVqIIWlsM06YYqKbv2qiAUaimznUtKfOmW6Z2GiqV9J24yUy5rEydYpg53UA5ndfGIKTPUpeUphmWubMtQ6V0nrjJynBJmTfHEky1kFKDY0ToHe9O7Eas0Gk46siQUqmxAJMWRBJLvfTIEFoNmrbknAqIYNRp6kTta8tCJx4XYm2jXFxa8B6yOeGk48Jk9/Z4d2hXkkxNGA1st0D6ejjoef4JIbNnBJQaLkgqGCp6FswJeN7xGRhI67SUemPjuFttCp/v/cqMpSEnHR+yrdc3XJBxRgS6ezynnBjStiSAwTSKWhEjA8bHmV5SWLDGRwodhnNenG1Y6pQQOzjnjCw0CT5t/vQISr/xbRvXg0apSw4pQJ/y8rNyzJ9jGSo2hD2e9A94Fi8KOP+sHPT41BlBAMSA+vUmyMabBLaMd3/2hPY4pp4ccv5ZWTZudo0NA+OEMbBpi+flZ+doOS5E+9LoegAqqPHrTGX9Qu9j3Zi6fYpQq+MnvOniArmcEEXP+ZUGh4FyRWlvM7z5NQWI0zsbJdahw+FaQzAMwpp0Pk6AjY6TL8hzwVk51m6IG9Z6jDEG1q53vPL8HIvPzMKmlFZuA7CKVIPVJpsNMCJPpvXu81WFvHDdlU2ICNUopR2doJQrSi4rvPfKJrCCT/HTUqsGLbgVRsMcBMGj6ZuormGA9Y7nvbrA616Z45k1rpGxaYywFp5ZE/PG1xY45mV5dH2c1mDlJJIJ60z76seMVkpoHD0hktbe1qw1yof/pJW2FqF/oLF0frhJ5qWVGdMtH3p/C5Q1fcviOyOA8U9r3LbFCIqorgAdGO9+7RUDus4x78U5PnRNC2vWxal16yYKCmzYFPOx61qYdmoG3ejSa6UBRBH0SSlOwWgmRsOorOofT+8IoOYcbXW85wOtnPPiLKtWxwQNN+SwEATw1DMxrz4/z1ve1wqbXeqWMXZHwZlHUMFIlEeiJkSDe9NZzKOG1Gpktwhf/GwH+bzQ1e0bsyGjjDWweatnSrvhc59th4zgB9KZDuFZqEDA7zXrME6TPA4e/T2S4qqmABZ0jWPhi3N86ZPtbNrqKFca/vVoYQSKJaW7x/O1z7Qz63kZ/NoUl2/eGSEG/YOgGOdKxG4YF0f3i6Ss7sseUIB1MRdd28pH3tvCiqdiVFO8Zb9OEEliO556OuavPtjKuW9rhjUpnpPeGW8R6x6lc2U3HU9iwpZWMq2t2JamdWrsitQuF40g4MsK2xwf/fsO3nRxgWUrYurgfkwtIwZh+YqId17exPs/2QZbHL5KfZxUoyjmPh2chQ7OJtDfLkv+UAKOnnanLJhylA6nb4fXszDgexwmG3DDLVPofl0Xv/p9hWOXBo3d5wfIiDF4/MmY17wsxxdu6IRhxfdrfbgdANZDr/+lFgsQCMbOacfOaccuaMe0ZP9dY5duv3oEK/iNDgrCD26dypmnZVj2ZISRhiuyv4ycp8efjHjFWVm+/b1pEAp+i68fQSdUpCn739KZQdpCxK05J3nbAFXXjNIFkhvXLh4IsWIWBES9nivetI077ilz7NIwGfPWw805TpiaD718RcTFF+T4zvenJXHSa136UvTuE0WMvVNs7nwsyXYuU3SYosMMOEyFIVHz27rwo0YIBL/GEbYbbvvnabzh4gKPPxFRaeS23ivWwHBZWf5kxJVvaOI7t02DvCQzHXUlaJLHjcZ3aGUAHR5Ay4OYuDNL3JklnpIl7szgs+HtuNoOxnohILEwGeHGH07lA9e2sOrpmJ4+31ig2YXAQlePZ81ax8c/1MpXvjsVEPz6GIJ6smZs3z1OGPyEbJiUOciEiHfzn/2pSmYaG+dtURVJ9WLMnnBgOg1MNfzoa4N84i/7qMRwxHyL18ntjkhtrLFqdUxr3vD3n23nNe9shq0O31dHg8KdSaoi/w+D4fOSAUJygY2YNna82iHf3MX04NdEdSZoAAu+x8N6x+Xva+H2n0znuKUhjy6PKJcnbz1Ga2F4WHlsWcTzT8zws59NSwS91tXXLMcuCKA+9yMnFofBicWJRfTapbt/8rTw3f7imTfSk+Lg2X1RW9WVRQG+y/E3n+rn5m8NYUNh/lyLThKrPTK7sWZdjEF4z9XNfPzjbdBm0NUxqStgdSCoAAJTNxyhuWj1zn8S98mjd//CUU3tcm5Hlw5GQT251rvhwEw10Gn43U+H+fRnB7j3gQqzZlqmdJokG/4ERCTZsdK1zbN1q+PMF2f5xMfaef6FOdjmk6dZnVrnEUQMXv19Ptj0QuyzY2LFb77g2Z9WYDCGKLpVC/byNKZrPSA8mABYGECX44abhrjppiFWr4tZuCCgkJcJJW5jkiJDGzbGLF4U8u6rm3nnO5uTWuJrYrwj3SGk+4sVZNhdyaD5LrvsBRDdcPbuXxBQx0u0oveMTQ/HAAemw8A0w+ZHIr7xzUF+8Z9Jau4wHOe+HSIjg8DePs/mzY55cwPeeHmBd17VzNRjQtji8f31b523oyABRTGmE909FbX41efv5YsK3j2jqgsPcxfHDgVRkNkWmgwffcc2vvfjYRbMq8+rLZLkt9va5ejr8yw5MuQ1r8nzlsubmHtqBvo9utVvdz8nBApiBAm40Rl/jZjdI0sD6d5LIQEHtJkva9Z8kYmS+FyS8YVscTCTulycGVkpHRhUurY5wgCed0qGV78yzyWvKjD1hBAGFH2qNhCsw9+4L8SAGqW0vvIVP6BIsHskWxC17N2hFPE3GJf5NJA/vF0dY7IC/Z6n18QU6uCXCcmS9sCgp7fPYy0csTDg1a9o4vzzcpx3Zg5mW+j1O8Q8USzzrgjg+JWzLKNV0D3ctIHZl6PltSzG/YOK/dCEmQPzwHTLY3eUeOiRiPb29JkyrxBFyvCwMjioRLHS2iIsOiLkta8OOeP0LGe8IEPn0kziJ29x+JW12OeJKuYRPGDkb1pmN+31twY285yjpP8nqh/yMRPihEkACHzntiIDg54Z0wL8KK0zGZMkJY/jZJ+fGBB5duG8ZI5c8Zr4w3GsVKpQrSrVquI9ZDJCe5th4YKAxYsCjj8m5OTjQk48NkNugYWMQK+H9XHSd2HCuRl7RWS5qP5G43ivkRxBcaiyzza891syWfu9TBi+RVNaYmy/8SDzAlbdXeZfflFm7mw7aoK2Ntnbl7XQ3GEoDipRpMROk+q9mojcGCGwEIZCNpuIt73VMLXTMGN6UhJk3ryAI+dbFsyz5GYF0CxJ0aB+DxvdDiHDhDA0+0VtgBib+C+c85h9/PAgfo6wLCdCoHwE8W+p9zNoMoDAl28eolj0zJ556FbamKRi1RMrYk4+LuTTn2ln3tyA3g0xxVJihaNYayGREARCNgPNBaGpKalA1tFmkBYDTZJYYSUpElT00O3wW3n2qa/vy3BwGED9yqDCT6yYfcbbBW3S8RyNCVTY6LV4C9nyO/B1+pxzwJEBD/1kmH/+eYkF8w9d0NbClq2e7h7HFW9o4u/+rp2WI0LodcxeFCT+ruz00trL1/rjFGISK1xSGPJ77tNkFPGuKODlA6Ih8hwOg2jP0n1/QiHZxi3Tff/0LfjaZG89oWBaEiv4+tdt5YGHIhbMO3jXw5okx9yqZxyL5ls++pFWXv/OFigpfpObOIscacHHkMkvk84lxyV3+L4vXODi57DU2xsOtqrqlwz6p4fcyTFGFJgRcOvn+rn7ngrHLA0PStAjAUKr1zl8DG+/somP/nlrsmq3zuFL9RvxlmrEIMZfR7RhvyLRpPr0efvZsmKMzxilW502H1ovxxAHZn5A17Iq51y8FVXoaDcHNEM5sgy9tcvT0+15yYuzfPD6Fl56SQGKmuyVNDTchMOBgIj8UpCXo/sXpBOEMw4g8EGkqr2V6xmIbyasgyuoYJqTFadPfLKPrds8Ry8J9juASUgGdz19nk2bHMcfG/KJj7Vx5ZVN0FELEIpoWOfDSDIMkXcJArJ/J1p0/ZkHdAT1Cl6Wq5M9xKymC1GQxSE//kI/7/lwH0cvCfZ7p7k10D+obNgQs3B+wBVXNPGuq5ppOTKEzXGSiqsh5sNKLbbli7HTD8oBpAgQXXv2/h9FSS6k43nE+uCz5kvThgNzZMC6+yuce/FWsllDR7s8py9tLQwOKevWx8yZFXDppQWuflszM08Kocfju/3kWLlLA1a7Rd1MUT2g6KPAD3Qe+MFUHtJ879fFRu/FmfRdYA9mmoU+z7V/1kuprMyeKcT7cDushaGism69Y8Y0w/uuaeHtVzaz4LSkEKaujJNotzqd0awrFMQouPAKfCFWowe0D1wef+AlB3zMyCvNWc+RrdkuVZ2aqrAQBZMTmGv563d38+Vbhjjh6BC3FwttTFJEfv16x5QOwyWvK/D2tzax+EVZKCpscskEUtpu3ImMeETtv1DpvFTUcKCZDWRo+QsP+JgKGA3I5/R8jNyhUZCauesRP/pnXxvg7R/o5cgjLJlQnjXbMTKbMTiobNzs6GgzvPpVed79jmaWviSbLIRsckmN9IaYxxYFUV8itDPE2MGDCaQTfeacgzhysjymXkHNDSruPanYy+jAHBWw4ldlXv76LgoFobPDbPejR8Tc0+fZusUxd07Aq16V582XFjj2JblkhW/X2IoGY4gHF0Kh7SKTzf8iWW49cET/97qD74PL4rLd0P7MKlMxi9T58Utk5xQzL6C4yXHBhVvZsMWxcJ4ldju61LXN09PjOGpxyGteW+BNry8w79QMVGqWOabhM48XmuzRktbyTTKtcHUyI3FwS77iH3nlIfREUBxkS8dKyOPjlnF0ZNd4RnjLJVv55T0VjjkqwLskofzmLY7honLiCSGXvK7AG19boOPYEAY1SebScDPGHQE0blorcx5aIM2bD60t/cgh9sYBJdDLTrhOj5v3NfqLh9jgAaJg8gJzAj51TTdf+OYgJxwbUo1gw0aHi5XTX5DlsksLXHpRnsyCJOBIu/3E3iFSZ2hnK/pfjx4b3L16OVMOra2AU2ccYm+AKjAz/w80mTMYDt5MOQI7BmqpxSgzJ+BHn+/ny7cMsXBewFNPx4RWOPulWS67rMDFF+ZhRpIiQVdGE2sjat0jiI/Qyra3ybTycpbmoenQfEDxq08fjX5BsYwOKLS0LqcQHr3XObTRxINZEvLHnxY5//VdVL0yf3rAeefmeMOlBc46Pw9tkgz+itrwl9OIKhI2/aNkqtfRqpDPcqi5ZkSvHp2+AdAN+uZ5c/TcE1fRM5QdxZZ3x4FZErD81xVOPGcjnVnLu97ezKWXFDjlzCyENTGXG2JOLwrlgd+bI856MYWjgcFRaVX0e7NGpSEAisBpc9HFM8/QbQO/O8jB635h2g2PPR7xvmt7OOq4gI//WRsLT80ks0CbaoFGDTGnF1XE2rWa9UvNtCVlwpnAXtJ1HCCi+o5RaWgHCgzCmq43Y833teqTOiyj6MOKgMsK99xRornNcNolTcnWpy2NOea6QX3FVMKjOG7mWqgAo2eFgqTB0aS2h8nyA0JZJF4+pZXRLS6pCjLkOefCPOQFVkU7puUagk4/DiTiPIq6FqdgM8Do5X6Tk09uH7XGak2CeqgmORX+9evHfX7+Sa0f9N0pr/jVYAwQjAUN9WKc/7lEARzRXjPQo7ckHTz8cN+oNbYnhrf4P6PJ5KWH9462G9KgvlCnVE38pswc+/NEyR7YNurHOexDqSBjINZrVfnO9h3VDSYdxhhU/LuqcXTr7vkeRvc1ZrWY1Nm3mawqzr+tYbEnFxII6nkPqjfLblk5R18IYzfppSAZucpbvQG/U5RRgwmN+ACJ/VvU8I2xOubYzuTGjlI+/17f2vp5iQ8urLBBHRECvvcShqPvj0nYRI2xFbXzmGwWzeQ/5F30URMIB7KhskEdoIARJDDDXvVcDQZ+OtalC8dW1COp771D0b+Pyu4K7yU1u2YajAJWkKqupepPxZi70Fqa2TFk3BaSA7EMlYs/KEn3S43m+2oZAMerOw0OGQW1aKC/w3edJMP+ifFKITGO0RGCWA+ivyUonkhQ+kNyVzeoSzSDyRVvJBh6iRrXxx5qsYwV4xzyI+AzkCmuU1t8kcI3Gsa6zlBNlh+UazRTvEbCSnJNx5EUxLEp+KD2X/F7JMhcQ9Yr1oNvDCJTixcIHJKXVWqDM9RXb8QbOIiUBqNNCkQ9Qm1FqFlvpCd/khRzD5CZQFU7JxIKknVIX/5bVPPHUpB701RENkWirhFGSHfzo1LMvUCy7u/ZpWZKg3FEkxo2JpDhalC9MtpWeIcM5qrYOFUrxOkTtRcIHViHqvmowvlqWEY4fgOPSU9th7IEgnfudg/HqNrvehOD9UlxyhSRPlHvht5Zxh2vRfdZwTaW18cDY0BlMz66wql7nXesHUkMlEbSL2oBdar0Rx+j0PcCFX/XeHdp0iCAGiQs3SC5vqO1Ij8QkdSKeYT0ixoQBAKQsPSAV3+uqr1CDE+ZoGYtGm7J6FKbwBC4A29OV4neS6bcXy8JuetC1NvxyUkV5AdaMUujIfmEivaKbezjOmRGDIMAXh+TnH0TyMtQvR81tXNfH9ajvkQ9glUktj7qNZ92Q2apSvwZ0KFE1/Vx4lOHAFZXUA2vZltwgoTcSlCf8qjPXie5hBEL4kyXc/HH1VSOwsj/FQkGUNsIknouFIwoJnQgPCE2eC9OjiaWm3AW1QNLdJ4m6lPUOyPUHGu/CbEfUesXSWbww6J2dfLz6uexOSZIEngkRqj64J6t25rfJJZjxMgNIIoomPo+X/Uv6u1IMl9qo27C4ue0bBYjpbcSVu6qlwHOmKCmLOHwdyV055fj7Jkbt7XcKhPsqTaBRF1DBTQAZx3h4PckGDyXSvb5GP2cGNZBklRy0rjfI/PJRh4k4CMa2SVk+q4kqN5pxJANJ94OpIkb6ykAtQAbrw+CPqhG/o+ovlK9vE6RVxlDh1K/vuOeEAEd2bYvPInnZ+r97Vh7L6b2vo4UTZ9AP3wnJq6od2bHbF9FrN5e6pPbpSlqy+fkZVoKLsRyjkEXooZkJ06cWPy0zxLWslKJWlQ9YhUVeQh1dxFnfoH4u5PfMt4dHVsmh6h3RQHr+zH8GM3+WKJIKl5fGAX+vOaMf6mPsycbGZoOGTzBjnrY411xYHtqNQNaTgZ9pvC0N+X7jAnuqgxHdxsTrAxFUW+2Z4CbbExOUQs135uapUMrFXNvKSje25wpIaXOQiV74slUN5+eDftOV2OPUTWLUQpJIjiTCP1ZFnAnxR+I+J/12ZEO1WYkR7oogLWo99tQnpK4+DCZI+/Hhn/U4iOP+o4qRtrxQ4oxtS+IMulMdI3JKeo9YAxYkVqQe3U41oW/Vzfw+6zdhs824bU4PdThxb7ScSxExyAyD8N8kNlYPx1DliqJII0k87zUZtB2Os6IfrcHttXW+UVBQ8BTxMtGFd2EZ40xrCmX/DLZ1r88s6RtlXoGtVRGctPBFsD9ATQD2tiZP0JD1HvEIAwj4qipFCTeipa24qf+HldFrSCioQZuBr3Ns2w16HDT+6aKt+2KThGlHSFU0QwqWSBT03cZoSoQoZQx2qPe97qM6Ql62rvjoNhrctF6FdmGSwIwoqpHuotkl7bVokAtaKXm9zemK3fl/wPWafRf8V3CkAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  )
}

export default KakaoIcon
