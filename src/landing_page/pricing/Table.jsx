function Table() {
    const tableData = [
        ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
        ["Row 2 Data 1", "Row 2 Data 2", "Row 2 Data 3", "Row 2 Data 4", "Row 2 Data 5"],
        ["Row 3 Data 1", "Row 3 Data 2", "Row 3 Data 3", "Row 3 Data 4", "Row 3 Data 5"],
        ["Row 4 Data 1", "Row 4 Data 2", "Row 4 Data 3", "Row 4 Data 4", "Row 4 Data 5"],
        ["Row 5 Data 1", "Row 5 Data 2", "Row 5 Data 3", "Row 5 Data 4", "Row 5 Data 5"],
        ["Row 6 Data 1", "Row 6 Data 2", "Row 6 Data 3", "Row 6 Data 4", "Row 6 Data 5"],
        ["Row 7 Data 1", "Row 7 Data 2", "Row 7 Data 3", "Row 7 Data 4", "Row 7 Data 5"],
    ];

    return (
        <div className="container mt-5 pt-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
