// Fundraising Progress Calculator
// Simply update these two values, and everything else auto-calculates
const FUNDRAISING_GOAL = 100000000;  // Total goal in LKR - UPDATE THIS
const AMOUNT_RAISED = 8750000;      // Amount raised so far in LKR - UPDATE THIS

// Expenses Allocation - Update these to match your actual budget
// Format: { title: 'Project Name', amount: Allocation in LKR, description: 'Details about this expense' }
const EXPENSES = [
    {
        title: 'Church Roof Renovation',
        amount: 35000000,
        description: 'Complete replacement of the main sanctuary roof including structural repairs and waterproofing'
    }
];

// Format number to LKR currency with commas
function formatCurrency(amount) {
    return 'LKR ' + amount.toLocaleString('en-LK');
}

// Calculate and update all progress values
function updateFundraisingProgress() {
    // Calculate remaining amount
    const remainingAmount = FUNDRAISING_GOAL - AMOUNT_RAISED;

    // Calculate percentage (capped at 100%)
    const percentage = Math.min((AMOUNT_RAISED / FUNDRAISING_GOAL) * 100, 100);

    // Wait for DOM to be ready
    const goalEl = document.getElementById('goal-amount');
    const raisedEl = document.getElementById('raised-amount');
    const remainingEl = document.getElementById('remaining-amount');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-percentage');

    // Only update if elements exist
    if (goalEl) goalEl.textContent = formatCurrency(FUNDRAISING_GOAL);
    if (raisedEl) raisedEl.textContent = formatCurrency(AMOUNT_RAISED);
    if (remainingEl) remainingEl.textContent = formatCurrency(Math.max(remainingAmount, 0));
    if (progressText) progressText.textContent = Math.round(percentage) + '%';

    // Animate progress bar with error checking
    setTimeout(() => {
        if (progressBar) {
            progressBar.style.transition = 'width 1.5s ease-out';
            progressBar.style.width = percentage + '%';
        }
    }, 500);
}

// Render expenses breakdown
function renderExpenses() {
    const expensesGrid = document.getElementById('expenses-grid');
    if (!expensesGrid) return;
    
    // Clear any existing content
    expensesGrid.innerHTML = '';
    
    // Create an element for each expense
    EXPENSES.forEach((expense, index) => {
        const percentage = (expense.amount / FUNDRAISING_GOAL) * 100;
        
        const expenseEl = document.createElement('div');
        expenseEl.className = 'expense-item';
        expenseEl.innerHTML = `
            <div class="expense-header">
                <span class="expense-title">${expense.title}</span>
                <span class="expense-amount">${formatCurrency(expense.amount)}</span>
            </div>
            <div class="expense-bar-container">
                <div class="expense-bar" style="transition-delay: ${index * 200}ms"></div>
            </div>
            <p class="expense-description">${expense.description}</p>
        `;
        
        expensesGrid.appendChild(expenseEl);
        
        // Animate the bar after a short delay
        setTimeout(() => {
            const bar = expenseEl.querySelector('.expense-bar');
            if (bar) {
                bar.style.width = percentage + '%';
            }
        }, 700 + (index * 200));
    });
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateFundraisingProgress();
        renderExpenses();
    });
} else {
    updateFundraisingProgress();
    renderExpenses();
}
document.getElementById('goal-amount').textContent = formatCurrency(FUNDRAISING_GOAL);
document.getElementById('raised-amount').textContent = formatCurrency(AMOUNT_RAISED);
document.getElementById('remaining-amount').textContent = formatCurrency(Math.max(remainingAmount, 0));
document.getElementById('progress-percentage').textContent = Math.round(percentage) + '%';

// Animate progress bar
setTimeout(() => {
    document.getElementById('progress-bar').style.width = percentage + '%';
}, 500);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', updateFundraisingProgress);