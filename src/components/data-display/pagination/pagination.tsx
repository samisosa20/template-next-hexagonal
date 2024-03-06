import { Stack, Icons, Typography } from "../..";

interface PaginationPros {
  onChange: (value: number) => void;
  meta: {
    currentPage?: number;
    lastPage?: number;
    totalPages?: number;
  };
}

export function Pagination(props: PaginationPros) {
  const { meta, onChange } = props;

  const currentPage = meta.currentPage ? meta.currentPage : 0;
  const lastPage = meta.lastPage ? meta.lastPage : 0;

  return (
    <Stack
      direction="row"
      className="gap-6 justify-center md:justify-end"
      align="center"
    >
      <Stack direction="row" spacing="sm" justify="start" align="center">
        <Typography variant="caption">
          Página {currentPage} de {lastPage}
        </Typography>
        <Stack direction="row" className="gap-2" justify="start" align="center">
          <Stack
            direction="row"
            spacing="2xs"
            justify="center"
            align="center"
            className={`w-10 h-10 p-2 bg-white rounded-md ${currentPage === 1 ? "" : "cursor-pointer hover:bg-purple-300"}`}
            onClick={currentPage === 1 ? () => {} : () => onChange(1)}
          >
            <Stack className="w-4 h-4">
              <Icons.dobleChevron
                color={currentPage === 1 ? "#75699B" : "#5723F5"}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing="2xs"
            justify="center"
            align="center"
            className={`w-10 h-10 p-2 bg-white rounded-md ${currentPage === 1 ? "" : "cursor-pointer hover:bg-purple-300"}`}
            onClick={
              currentPage === 1 ? () => {} : () => onChange(currentPage - 1)
            }
          >
            <Stack className="w-4 h-4">
              <Icons.chevron
                color={currentPage === 1 ? "#75699B" : "#5723F5"}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing="2xs"
            justify="center"
            align="center"
            className={`w-10 h-10 p-2 bg-white rounded-md ${currentPage === lastPage ? "" : "cursor-pointer hover:bg-purple-300"}`}
            onClick={
              currentPage === lastPage
                ? () => {}
                : () => onChange(currentPage + 1)
            }
          >
            <Stack className="w-4 h-4">
              <Icons.chevron
                color={currentPage === lastPage ? "#75699B" : "#5723F5"}
                className="transform rotate-180"
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing="2xs"
            justify="center"
            align="center"
            className={`w-10 h-10 p-2 bg-white rounded-md ${currentPage === lastPage ? "" : "cursor-pointer hover:bg-purple-300"}`}
            onClick={
              currentPage === lastPage ? () => {} : () => onChange(lastPage)
            }
          >
            <Stack className="w-4 h-4">
              <Icons.dobleChevron
                color={currentPage === lastPage ? "#75699B" : "#5723F5"}
                className="transform rotate-180"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
