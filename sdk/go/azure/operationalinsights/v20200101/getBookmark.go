// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBookmark(ctx *pulumi.Context, args *LookupBookmarkArgs, opts ...pulumi.InvokeOption) (*LookupBookmarkResult, error) {
	var rv LookupBookmarkResult
	err := ctx.Invoke("azure-nextgen:operationalinsights/v20200101:getBookmark", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBookmarkArgs struct {
	// Bookmark ID
	BookmarkId string `pulumi:"bookmarkId"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// Represents a bookmark in Azure Security Insights.
type LookupBookmarkResult struct {
	// The time the bookmark was created
	Created *string `pulumi:"created"`
	// Describes a user that created the bookmark
	CreatedBy *UserInfoResponse `pulumi:"createdBy"`
	// The display name of the bookmark
	DisplayName string `pulumi:"displayName"`
	// Etag of the azure resource
	Etag *string `pulumi:"etag"`
	// Azure resource Id
	Id string `pulumi:"id"`
	// Describes an incident that relates to bookmark
	IncidentInfo *IncidentInfoResponse `pulumi:"incidentInfo"`
	// List of labels relevant to this bookmark
	Labels []string `pulumi:"labels"`
	// Azure resource name
	Name string `pulumi:"name"`
	// The notes of the bookmark
	Notes *string `pulumi:"notes"`
	// The query of the bookmark.
	Query string `pulumi:"query"`
	// The query result of the bookmark.
	QueryResult *string `pulumi:"queryResult"`
	// Azure resource type
	Type string `pulumi:"type"`
	// The last time the bookmark was updated
	Updated *string `pulumi:"updated"`
	// Describes a user that updated the bookmark
	UpdatedBy *UserInfoResponse `pulumi:"updatedBy"`
}
