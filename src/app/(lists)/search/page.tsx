import { redirect } from "next/navigation";
// import { tmdb } from "@/tmdb/api"

// import { ListPagination } from "@/components/list-pagination"
// import { SearchResultCard } from "@/components/search-result-card"

interface SearchProps {
  searchParams: {
    q: string;
    page: string;
  };
}

const results = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/poster.jpg",
    release_date: "2021-01-01",
    media_type: "movie"
  },
  {
    id: 2,
    title: "TV Show 1",
    poster_path: "/poster.jpg",
    first_air_date: "2021-01-01",
    media_type: "tv"
  },
  {
    id: 3,
    title: "Person 1",
    profile_path: "/profile.jpg",
    media_type: "person"
  }
];

export async function generateMetadata({ searchParams }: SearchProps) {
  return {
    title: `Search results for: ${searchParams.q}`
  };
}

export default async function Search({ searchParams }: SearchProps) {
  if (!searchParams.q) {
    return redirect("/");
  }

  // const { results, page, total_pages } = await tmdb.search.multi({
  //   query: searchParams.q,
  //   page: searchParams.page
  // });

  if (!results.length)
    return (
      <div className="container flex h-[33vh] items-end justify-center">
        <div className="text-center">
          <h1 className="text-2xl">No results found</h1>
          <p className="text-muted-foreground">
            No results found for &quot;{searchParams.q}&quot;.
            <br />
            Please try a different search term.
          </p>
        </div>
      </div>
    );

  return (
    <div className="container h-full">
      <div className="space-y-8">
        <div className="md:mb-12 md:mt-6">
          <h1 className="mb-2 text-2xl font-medium">Search results for</h1>
          <p className="text-xl text-muted-foreground">
            &quot;{searchParams.q}&quot;
          </p>
        </div>

        {/* <div className="grid-list">
          {results.map((result) => {
            return <SearchResultCard key={result.id} media={result} />;
          })}
        </div> */}

        {/* <ListPagination currentPage={page} totalPages={total_pages} /> */}
      </div>
    </div>
  );
}
