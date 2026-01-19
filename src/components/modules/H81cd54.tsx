import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface H81cd54Props {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

function H81cd54({
  currentPage = 1,
  totalPages = 5,
  onPageChange = (page: number) => console.log("Navigate to page:", page)
}: H81cd54Props) {
  const maxVisiblePages = 5;
  
  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();
  const showFirstPage = visiblePages[0] > 1;
  const showLastPage = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <nav className="max-w-7xl mx-auto px-4 py-12" aria-label="Business blog pagination">
      <div className="flex items-center justify-center gap-2">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous page of business insights"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* First Page */}
        {showFirstPage && (
          <>
            <Button
              variant={currentPage === 1 ? "default" : "outline"}
              onClick={() => onPageChange(1)}
              className="min-w-[40px]"
              aria-label="Go to first page of business insights"
            >
              1
            </Button>
            {visiblePages[0] > 2 && (
              <span className="px-2 text-muted-foreground" aria-hidden="true">...</span>
            )}
          </>
        )}

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => onPageChange(page)}
            className="min-w-[40px]"
            aria-label={`Go to page ${page} of business insights`}
          >
            {page}
          </Button>
        ))}

        {/* Last Page */}
        {showLastPage && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="px-2 text-muted-foreground" aria-hidden="true">...</span>
            )}
            <Button
              variant={currentPage === totalPages ? "default" : "outline"}
              onClick={() => onPageChange(totalPages)}
              className="min-w-[40px]"
              aria-label="Go to last page of business insights"
            >
              {totalPages}
            </Button>
          </>
        )}

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next page of business insights"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Page Info */}
      <div className="text-center mt-4 text-sm text-muted-foreground" aria-live="polite">
        Page {currentPage} of {totalPages} business insights
      </div>
    </nav>
  );
}

export default H81cd54;