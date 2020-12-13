// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupReportByDepartment(ctx *pulumi.Context, args *LookupReportByDepartmentArgs, opts ...pulumi.InvokeOption) (*LookupReportByDepartmentResult, error) {
	var rv LookupReportByDepartmentResult
	err := ctx.Invoke("azure-nextgen:billing/v20180801preview:getReportByDepartment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupReportByDepartmentArgs struct {
	// Department ID
	DepartmentId string `pulumi:"departmentId"`
	// Report Name.
	ReportName string `pulumi:"reportName"`
}

// A report resource.
type LookupReportByDepartmentResult struct {
	// Has definition for the report.
	Definition ReportDefinitionResponse `pulumi:"definition"`
	// Has delivery information for the report.
	DeliveryInfo ReportDeliveryInfoResponse `pulumi:"deliveryInfo"`
	// The format of the report being delivered.
	Format *string `pulumi:"format"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Has schedule information for the report.
	Schedule *ReportScheduleResponse `pulumi:"schedule"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
