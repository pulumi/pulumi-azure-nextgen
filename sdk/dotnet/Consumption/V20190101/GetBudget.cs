// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Consumption.V20190101
{
    public static class GetBudget
    {
        public static Task<GetBudgetResult> InvokeAsync(GetBudgetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBudgetResult>("azure-nextgen:consumption/v20190101:getBudget", args ?? new GetBudgetArgs(), options.WithVersion());
    }


    public sealed class GetBudgetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Budget Name.
        /// </summary>
        [Input("budgetName", required: true)]
        public string BudgetName { get; set; } = null!;

        /// <summary>
        /// The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
        /// </summary>
        [Input("scope", required: true)]
        public string Scope { get; set; } = null!;

        public GetBudgetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBudgetResult
    {
        /// <summary>
        /// The total amount of cost to track with the budget
        /// </summary>
        public readonly double Amount;
        /// <summary>
        /// The category of the budget, whether the budget tracks cost or usage.
        /// </summary>
        public readonly string Category;
        /// <summary>
        /// The current amount of cost which is being tracked for a budget.
        /// </summary>
        public readonly Outputs.CurrentSpendResponse CurrentSpend;
        /// <summary>
        /// eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
        /// </summary>
        public readonly string? ETag;
        /// <summary>
        /// May be used to filter budgets by resource group, resource, or meter.
        /// </summary>
        public readonly Outputs.FiltersResponse? Filters;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Dictionary of notifications associated with the budget. Budget can have up to five notifications.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.NotificationResponse>? Notifications;
        /// <summary>
        /// The time covered by a budget. Tracking of the amount will be reset based on the time grain.
        /// </summary>
        public readonly string TimeGrain;
        /// <summary>
        /// Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
        /// </summary>
        public readonly Outputs.BudgetTimePeriodResponse TimePeriod;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBudgetResult(
            double amount,

            string category,

            Outputs.CurrentSpendResponse currentSpend,

            string? eTag,

            Outputs.FiltersResponse? filters,

            string id,

            string name,

            ImmutableDictionary<string, Outputs.NotificationResponse>? notifications,

            string timeGrain,

            Outputs.BudgetTimePeriodResponse timePeriod,

            string type)
        {
            Amount = amount;
            Category = category;
            CurrentSpend = currentSpend;
            ETag = eTag;
            Filters = filters;
            Id = id;
            Name = name;
            Notifications = notifications;
            TimeGrain = timeGrain;
            TimePeriod = timePeriod;
            Type = type;
        }
    }
}
