import React from "react";
import MinhaFoto from "../assets/MulherBanner3.png"; // 👈 importe sua imagem
import { Search as SearchIcon } from "lucide-react";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  inputBg: "bg-white",
  border: "border-slate-200",
  primary: "text-slate-900",
  accent: "bg-rose-600",
  accentText: "text-white",
  muted: "text-slate-400",
};

export default function Test({
  placeholder = "Buscar acompanhantes, cidades, serviços...",
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (onSearch) onSearch(value);
  };

  return (
    <div>
      <section class="relative bg-[#0a0a0a] pt-8 px-5 pb-10 min-h-[410px] md:pt-[53px] md:pb-10 xl:py-[112px] xl:px-3 xl:min-h-[831px]">
        <div class="relative w-full mx-auto md:max-w-[574px] xl:px-0 xl:max-w-[1180px] z-2">
          <h1 class="font-bold text-2xl text-aux-black leading-[29px] max-w-[210px] mb-8 md:max-w-[370px] md:text-[32px] md:leading-10 xl:max-w-[708px] xl:text-[52px] xl:leading-[63px] text-white">
            A <span class="text-red-500">maior plataforma </span>
            de acompanhantes do Brasil
          </h1>
          <div class="mb-8 md:mb-10 xl:mb-12">
            <div
              class="grid gap-2 md:gap-4 xl:gap-3 text-white"
              data-testid="subtitle-section-home"
              data-v-ca38152a=""
            >
              <h2
                class="font-semibold gap-y-2 grid text-aux-black text-base leading-4 md:gap-y-4 md:leading-5 md:text-2xl xl:flex xl:gap-x-3 xl:gap-y-0"
                data-v-ca38152a=""
              >
                <span data-v-ca38152a="">
                  +22 milhões{" "}
                  <span
                    class="block font-medium text-xs md:text-xl md:inline md:leading-5"
                    data-v-ca38152a=""
                  >
                    de usuários
                  </span>
                </span>
                <span data-v-ca38152a="">
                  +70 mil{" "}
                  <span
                    class="block font-medium text-xs md:text-xl md:inline md:leading-5"
                    data-v-ca38152a=""
                  >
                    acompanhantes
                  </span>
                </span>
              </h2>
              <h2
                class="font-semibold gap-y-2 grid text-aux-black text-base leading-4 md:gap-y-4 md:leading-5 md:text-2xl xl:flex xl:gap-x-3 xl:gap-y-0"
                data-v-ca38152a=""
              >
                <span data-v-ca38152a="">
                  +1 milhão{" "}
                  <span
                    class="block font-medium text-xs md:text-xl md:inline md:leading-5"
                    data-v-ca38152a=""
                  >
                    de vídeos
                  </span>
                </span>
                <span data-v-ca38152a="">
                  +130 mil{" "}
                  <span
                    class="block font-medium text-xs md:text-xl md:inline md:leading-5"
                    data-v-ca38152a=""
                  >
                    avaliações
                  </span>
                </span>
              </h2>
            </div>
            <div class="mt-4 md:mt-12 flex flex-col gap-3 md:flex-row">
              <div class="w-full h-full absolute top-0 left-0 overflow-hidden md:overflow-visible md:max-w-[574px] md:left-1/2 md:-translate-x-2/4 xl:max-w-[1180px] z-1">
                …
                <div
                  className="absolute -right-16 top-[9px] w-[282px] h-[399px]
                 md:w-[294px] md:h-[418px] md:top-[18px]
                 xl:w-[580px] xl:h-[831px] xl:-right-10 xl:top-[127px]
                 bg-no-repeat bg-cover xl:bg-auto rounded-2xl shadow-lg overflow-hidden "
                  style={{
                    backgroundImage: `url(${MinhaFoto})`,
                  }}
                  aria-label="Foto personalizada de fundo"
                  role="img"
                ></div>
              </div>
              <div
                class="text-md full max-w-[225px] max-h-8 px-4 md:px-6 rounded-full relative md:max-w-[305px] md:max-h-10 md:text-base"
                href=""
                data-testid="ad-register-intended"
              >
                <div class="flex items-center justify-center h-full w-full">
                  Cadastre como acompanhante
                </div>
              </div>
              <div
                class="outlined outlined--neutral text--md full max-w-[225px] max-h-8 !px-4 md:!px-6 !rounded-full relative md:max-w-[305px] md:max-h-10 md:!text-base"
                href=""
                data-testid="ad-register-intended"
              >
                <div class="flex items-center justify-center h-full w-full">
                  Cadastre-se como cliente
                </div>
              </div>

              <div class="w-full h-full absolute top-0 left-0 md:left-1/2 md:-translate-x-2/4 md:max-w-[834px] xl:max-w-[1440px] overflow-hidden z-1">
                <svg
                  width="419"
                  height="292"
                  viewBox="0 0 692 482"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="bg-red absolute top-[17px] -left-[68px] xl:top-0 xl:-left-11 xxl:left-0 w-[419px] h-[292px] xl:w-[692px] xl:h-[482px]"
                >
                  <path
                    opacity="0.05"
                    d="M691.69 70.9926C689.764 48.4772 679.272 29.5369 660.492 14.7041C645.387 2.78714 626.379 -2.00499 605.495 0.809435C562.588 6.61577 507.414 45.7895 441.52 117.24C394.608 168.078 358.923 217.267 357.453 219.32L335.683 248.251L321.541 266.025C294.448 300.051 268.876 332.202 250.223 354.692L249.741 355.275C194.745 421.579 166.005 450.94 140.002 433.521C131.714 427.968 127.938 404.084 144.462 355.047C157.641 315.949 177.055 280.502 177.258 280.147L180.324 274.569C183.087 269.549 182.149 263.337 178.069 259.331L173.38 254.716C171.251 252.612 120.842 203.194 105.407 186.206C52.3116 127.737 43.061 93.2291 44.6577 74.5423C45.5701 63.9185 50.3094 55.5513 59.5853 48.1983C65.085 43.8625 71.6744 42.3919 80.3674 43.5583C141.751 51.8494 241.961 167.976 289.76 232.683C290.114 233.164 304.028 250.609 304.383 251.09L332.236 215.517C332.059 215.289 318.424 197.87 318.246 197.616C304.586 179.716 282.866 152.281 250.476 117.19C184.582 45.7642 129.408 6.59042 86.5006 0.78408C65.6425 -2.03034 46.6092 2.76178 31.5295 14.6787C12.7242 29.5369 2.23182 48.4772 0.305674 70.9926C-3.03974 110.318 21.0878 158.696 72.0546 214.756C84.0169 227.916 113.315 257.023 130.599 274.062C122.489 290.34 111.287 314.707 102.341 341.076C80.4434 405.782 84.5998 448.835 114.759 469.018C127.685 477.664 141.117 482 154.929 482C172.315 482 190.386 475.154 208.938 461.488C234.028 443.004 258.485 413.516 284.361 382.303L284.843 381.72C304.003 358.622 329.879 326.116 357.251 291.684L371.063 274.341L393.467 244.574L393.721 244.245C431.813 191.455 545.227 52.534 611.628 43.5329C620.296 42.3412 626.911 43.8372 632.411 48.1729C641.686 55.5006 646.451 63.8678 647.338 74.4916C648.935 93.153 639.684 127.687 586.589 186.105C571.154 203.093 520.745 252.51 518.565 254.665L513.902 259.229C509.822 263.236 508.909 269.448 511.646 274.468L514.713 280.071C514.916 280.426 534.329 315.898 547.508 354.971C564.058 404.033 560.256 427.917 551.969 433.445C526.016 450.864 497.251 421.503 442.254 355.199L441.773 354.616C434.879 346.299 414.959 321.578 403.377 307.201C402.895 306.593 388.753 287.678 388.297 287.12L360.444 322.693C360.926 323.277 375.118 342.192 375.625 342.825C385.104 354.616 400.209 373.353 407.153 381.72L407.635 382.303C433.536 413.541 457.993 443.029 483.058 461.488C516.132 485.854 548.319 488.389 577.237 469.018C607.371 448.835 611.552 405.782 589.655 341.076C580.303 313.464 568.265 287.83 561.397 274.062C578.681 257.023 607.979 227.916 619.941 214.756C670.908 158.696 695.061 110.318 691.69 70.9926Z"
                    fill="#E25352"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-full flex justify-center px-4 py-6 shadow-md ${COLORS.bg}`}
        >
          <div
            className={`flex items-center gap-3 ${COLORS.inputBg} rounded-full px-4 py-2 w-full max-w-2xl border ${COLORS.border}`}
          >
            <label htmlFor="search-input" className="sr-only">
              Pesquisar
            </label>
            <input
              id="search-input"
              name="query"
              type="search"
              placeholder={placeholder}
              className={`flex-1 px-4 py-3 rounded-full border ${COLORS.border} ${COLORS.primary} placeholder:${COLORS.muted} focus:outline-none focus:ring-2 focus:ring-rose-200`}
            />

            <button
              type="submit"
              className={`flex items-center justify-center w-12 h-12 rounded-full ${COLORS.accent} ${COLORS.accentText} shadow-md hover:brightness-95 transition`}
              aria-label="Pesquisar"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
