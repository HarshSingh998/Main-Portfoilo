export function AbdulRehmanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M0 0h64v256H0V0Z
            M128 0h64v256h-64V0Z
            M64 96h64v64H64V96Z
            M256 0h192v64H256V0Z
            M256 64h64v48h-64V64Z
            M256 96h192v64H256V96Z
            M384 144h64v48h-64V144Z
            M256 192h192v64H256v-64Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="M0 0h64v256H0V0ZM128 0h64v256h-64V0ZM64 96h64v64H64V96ZM256 0h192v64H256V0ZM256 64h64v48h-64V64ZM256 96h192v64H256V96ZM384 144h64v48h-64V144ZM256 192h192v64H256v-64Z"/></svg>`;
}

